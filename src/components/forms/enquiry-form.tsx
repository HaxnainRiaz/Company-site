"use client";

import React, { useState, useId, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { StatusMessage } from "@/components/ui/status-message";
import type { EnquiryResponse } from "@/types/enquiries";

const ALLOWED_SERVICES = [
  { value: "discovery-call", label: "Initial Discovery Consultation (General)" },
  { value: "ai-voice-chat-automation", label: "AI Voice & Chat Automation" },
  { value: "websites-admin-dashboards", label: "Websites & Admin Dashboards" },
  { value: "pos-retail-management", label: "POS & Retail Management" },
  { value: "seo-google-business-profile", label: "SEO & Google Business Profile" },
  { value: "workflow-automation", label: "Workflow Automation" },
  { value: "ecommerce-development", label: "E-commerce Development" },
  { value: "mobile-app-development", label: "Mobile App Development" },
  { value: "social-media-marketing", label: "Social Media Marketing" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select estimated budget (Optional)..." },
  { value: "Under Rs. 150,000", label: "Under Rs. 150,000 ($500 - $1,000)" },
  { value: "Rs. 150,000 - 350,000", label: "Rs. 150,000 - 350,000 ($1,000 - $2,500)" },
  { value: "Rs. 350,000 - 750,000", label: "Rs. 350,000 - 750,000 ($2,500 - $5,000)" },
  { value: "Above Rs. 750,000", label: "Above Rs. 750,000 ($5,000+)" },
  { value: "Not sure yet / Need guidance", label: "Not sure yet / Need guidance" },
];

const TIMING_OPTIONS = [
  { value: "", label: "Select project timeline (Optional)..." },
  { value: "Immediately / Urgent", label: "Immediately / Urgent (1-2 weeks)" },
  { value: "Within 1-2 months", label: "Within 1-2 months" },
  { value: "Within 3-6 months", label: "Within 3-6 months" },
  { value: "Exploratory / Planning stage", label: "Exploratory / Planning stage" },
];

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const rawService = searchParams.get("service") || "discovery-call";
  const initialService = ALLOWED_SERVICES.some((service) => service.value === rawService) ? rawService : "discovery-call";
  return <EnquiryFormFields key={searchParams.toString()} initialService={initialService} initialSource={(searchParams.get("source") || "").slice(0, 100)} />;
}

function EnquiryFormFields({ initialService, initialSource }: { initialService: string; initialSource: string }) {
  const router = useRouter();

  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService,
    message: "",
    company: "",
    website: "",
    industry: "",
    budgetRange: "",
    timing: "",
    timeZone: "",
    source: initialSource,
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "pending";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const idempotencyKey = useRef("");

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const messageId = useId();
  const companyId = useId();
  const websiteId = useId();
  const budgetId = useId();
  const timingId = useId();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setFieldErrors({});

    // Client-side quick check: at least email or phone
    if (!formData.email && !formData.phone) {
      setFieldErrors({
        email: ["Please provide at least one contact method (email address or phone number)."],
      });
      setIsSubmitting(false);
      return;
    }

    try {
      idempotencyKey.current ||= crypto.randomUUID();
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          idempotencyKey: idempotencyKey.current,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
        }),
      });

      const data: EnquiryResponse = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setStatusMessage({
          type: "error",
          message: data.message || "Failed to submit enquiry. Please review the highlighted fields.",
        });
        return;
      }

      setStatusMessage({
        type: "success",
        message: `${data.message} Your receipt reference is ${data.receipt}.`,
      });

      // Redirect to thank-you with receipt parameter after short delay
      if (data.receipt) {
        setTimeout(() => {
          router.push(`/thank-you?receipt=${encodeURIComponent(data.receipt!)}`);
        }, 1200);
      }
    } catch {
      setStatusMessage({
        type: "error",
        message: "Network communication error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {statusMessage && (
        <StatusMessage
          type={statusMessage.type}
          message={statusMessage.message}
          className="mb-6"
        />
      )}

      {/* Primary Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          id={nameId}
          label="Your Full Name"
          required
          error={fieldErrors.name}
        >
          <Input
            id={nameId}
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="e.g. Tariq Mahmood"
            isInvalid={Boolean(fieldErrors.name)}
            disabled={isSubmitting}
            required
          />
        </FormField>

        <FormField
          id={serviceId}
          label="Service or Project Goal"
          required
          error={fieldErrors.service}
        >
          <Select
            id={serviceId}
            name="service"
            value={formData.service}
            onChange={handleChange}
            options={ALLOWED_SERVICES}
            isInvalid={Boolean(fieldErrors.service)}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Email and Phone: either is acceptable */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          id={emailId}
          label="Email Address"
          hint="Required if no phone is provided"
          error={fieldErrors.email}
        >
          <Input
            id={emailId}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="name@company.com"
            isInvalid={Boolean(fieldErrors.email)}
            disabled={isSubmitting}
          />
        </FormField>

        <FormField
          id={phoneId}
          label="Phone / WhatsApp Number"
          hint="Required if no email is provided"
          error={fieldErrors.phone}
        >
          <Input
            id={phoneId}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="+92 300 1234567"
            isInvalid={Boolean(fieldErrors.phone)}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Message / Project Description */}
      <FormField
        id={messageId}
        label="What would you like to improve?"
        hint="Tell us about your current tools, team workflow, or the problems you want to eliminate (min 20 characters)."
        required
        error={fieldErrors.message}
      >
        <Textarea
          id={messageId}
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. We are running an independent pharmacy with 2 counter billing terminals and need to track medicine batch expiration dates without slowing down cashiers..."
          isInvalid={Boolean(fieldErrors.message)}
          disabled={isSubmitting}
          required
        />
      </FormField>

      {/* Optional Business Details */}
      <div className="pt-4 border-t border-border/60 space-y-4">
        <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
          Optional Details (Helps us prepare a more accurate assessment)
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id={companyId}
            label="Company / Practice Name"
            optionalLabel
            error={fieldErrors.company}
          >
            <Input
              id={companyId}
              name="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
              placeholder="e.g. Al-Shifa Health"
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            id={websiteId}
            label="Current Website or Social URL"
            optionalLabel
            error={fieldErrors.website}
          >
            <Input
              id={websiteId}
              name="website"
              type="url"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://..."
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id={budgetId}
            label="Estimated Budget Range"
            optionalLabel
            error={fieldErrors.budgetRange}
          >
            <Select
              id={budgetId}
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              options={BUDGET_OPTIONS}
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            id={timingId}
            label="Desired Timeline"
            optionalLabel
            error={fieldErrors.timing}
          >
            <Select
              id={timingId}
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              options={TIMING_OPTIONS}
              disabled={isSubmitting}
            />
          </FormField>
        </div>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="normal"
          isLoading={isSubmitting}
          className="w-full sm:w-auto min-w-[220px]"
        >
          Submit Project Enquiry →
        </Button>
        <p className="text-xs text-ink-muted mt-2.5">
          Your details are used strictly to evaluate your enquiry. We never share or sell contact information.
        </p>
      </div>
    </form>
  );
}
