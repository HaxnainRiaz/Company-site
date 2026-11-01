import { ContactPageContent } from '@/components/pages/contact/contact-content';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({ title: 'Start a Conversation', description: 'Tell us what you want to improve. Share your idea and explore the next step.', path: '/contact' });
export default function ContactPage() { return <ContactPageContent />; }
