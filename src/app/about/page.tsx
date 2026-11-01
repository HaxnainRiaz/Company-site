import { DirectoryHero } from '@/components/shared/directory-hero';
import { AboutStudioSection } from '@/components/pages/about/studio-section';
import { EnquiryCta } from '@/components/shared/enquiry-cta';
import { Container } from '@/components/ui/container';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({ title: 'The Studio — Good People, Good Ideas', description: 'Our approach to thoughtful design, useful software, and connected business tools.', path: '/about' });
export default function AboutPage() {
 return <><DirectoryHero eyebrow="THE STUDIO / CURIOUS BY NATURE" title={<>Good people.<br /><span>Good things happen.</span></>} description={<>We care about the way things look. And the way they work.<br />A collaborative studio approach to design, software, and a better everyday.</>} /><AboutStudioSection /><section className="studio-section bg-surface-muted"><Container><EnquiryCta headline="Your idea. A shared ambition." copy="Let’s talk about where your business is going, and how we can help you get there." ctaText="Start a conversation" sourceContext="about-page" /></Container></section></>;
}
