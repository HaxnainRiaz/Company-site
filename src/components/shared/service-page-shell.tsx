import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServicePageHero } from './service-page-hero';
import { CapabilityStudio } from './capability-studio';
import { ServiceSystemStudio } from './service-system-studio';
import { FaqList } from './faq-list';
import { OfferingMotion } from './offering-motion';
import { ServiceExperience } from './service-experience';
import { ServiceEditorial } from './service-editorial';
import { serviceVisuals } from '@/content/visuals';
import { offeringStories } from '@/content/offering-stories';
import { servicesMap } from '@/content/services';
import type { ServiceItem } from '@/types/content';

export interface ServicePageShellProps { service: ServiceItem; distinctVisual?: ReactNode }
export function ServicePageShell({ service }: ServicePageShellProps) {
  const { kind } = serviceVisuals[service.slug];
  const story = offeringStories[kind];
  return <OfferingMotion className={`offering-page offering-${kind}`}>
    <ServicePageHero service={service}/>
    <div className="offering-chapters"><Container><span>{service.shortTitle}</span><nav aria-label="On this page">{[['journey','How it works'],['scope','What’s included'],['approach','Our approach'],['process','Delivery'],['pricing','Investment']].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</nav></Container></div>
    <ServiceExperience kind={kind}/>
    {["mobile","social","commerce"].includes(kind)&&<ServiceEditorial kind={kind}/>}
    <CapabilityStudio service={service} kind={kind}/>
    {!["mobile","social","commerce"].includes(kind)&&<ServiceEditorial kind={kind}/>}
    <section className="offering-section offering-difference" id="approach"><Container><div className="offering-section-heading"><div><span className="offering-eyebrow">WHERE WE PUT THE EXTRA THOUGHT</span><h2>{kind==='social'?'Creative with a purpose.':kind==='voice'?'Trust is part of the design.':kind==='retail'?'Built for the people using it.':'The details that make it work.'}</h2></div><p>{service.outcome}</p></div><div className="offering-difference-grid">{story.difference.map((item,index)=><article key={item.title}><span>0{index+1} / OUR APPROACH</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div><details className="offering-fit"><summary>Is this the right fit for your business?<span aria-hidden="true">+</span></summary><div>{service.audience.map(item=><p key={item}><Check size={17}/>{item}</p>)}</div></details></Container></section>
    <section className="offering-section offering-delivery" id="process"><Container><div className="offering-section-heading"><div><span className="offering-eyebrow">FROM FIRST CONVERSATION TO HANDOVER</span><h2>A clear path to {kind==='social'?'your next campaign.':kind==='seo'?'your next improvement.':'launch.'}</h2></div><p>Each stage has an output you can review. The scope and your feedback guide what happens next.</p></div><ol className="offering-delivery-list">{service.deliverySteps.map((step,index)=><li key={step.step}><span>0{index+1}</span><h3>{step.title}</h3><div><p>{step.output}</p><small>Review together: {step.reviewPoint}</small></div></li>)}</ol><div className="offering-handover"><div><span className="offering-eyebrow">WHAT YOU RECEIVE</span><h3>The work, ready to use.</h3><ul>{service.deliverables.map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul></div><div><span className="offering-eyebrow">WHAT WE NEED FROM YOU</span><h3>A good starting point.</h3><ul>{service.customerInputs.map(item=><li key={item}><ArrowRight size={16}/>{item}</li>)}</ul></div></div></Container></section>
    <ServiceSystemStudio service={service} kind={kind}/>
    <section className="offering-section offering-investment" id="pricing"><Container><div><span className="offering-eyebrow">SCOPE FIRST. THEN A CLEAR PROPOSAL.</span><h2>What goes into your investment.</h2><p>{service.investmentModel.modelSummary}</p><Link href={`/contact?service=${service.slug}`} className="offering-button">Discuss your scope <ArrowUpRight size={17}/></Link></div><div><article><h3>What shapes the project</h3><ul>{service.investmentModel.costDrivers.map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul></article><article><h3>Costs alongside the work</h3><ul>{service.investmentModel.externalCharges.map(item=><li key={item}><ArrowRight size={15}/>{item}</li>)}</ul></article></div></Container></section>
    <section className="offering-section offering-faq" id="faqs"><Container><div><span className="offering-eyebrow">BEFORE WE GET STARTED</span><h2>Questions about {service.shortTitle.toLowerCase()}.</h2></div><FaqList faqs={service.faqs}/></Container></section>
    <section className="offering-section offering-related"><Container><span className="offering-eyebrow">WHEN YOU NEED THE NEXT PIECE</span><h2>Works well with.</h2><div>{service.relatedServices.map(ref=><Link href={`/services/${ref.slug}`} key={ref.slug}><h3>{servicesMap[ref.slug].shortTitle}<ArrowUpRight size={20}/></h3><p>{ref.reason}</p></Link>)}</div></Container></section>
    <section className="offering-final"><Container><span className="offering-eyebrow">LET’S MAKE IT USEFUL</span><h2>{story.closing}</h2><Link href={`/contact?service=${service.slug}`} className="offering-button">{service.ctaText}<ArrowUpRight size={18}/></Link></Container></section>
  </OfferingMotion>;
}

