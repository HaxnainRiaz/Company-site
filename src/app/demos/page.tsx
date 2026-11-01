import { Container } from '@/components/ui/container';
import { DemoCard } from '@/components/shared/demo-card';
import { EnquiryCta } from '@/components/shared/enquiry-cta';
import { allDemos } from '@/content/demos';
import { createPageMetadata } from '@/lib/metadata';
import { Asterisk } from 'lucide-react';
export const metadata = createPageMetadata({ title: 'The Playground — Interactive Demos', description: 'Explore four interactive studio demos: a business dashboard, retail POS, online store, and booking assistant.', path: '/demos' });
export default function DemosDirectoryPage() {
 return <><section className="directory-hero"><Container><span className="eyebrow">THE PLAYGROUND / MADE TO BE EXPLORED</span><div className="directory-hero-row"><h1>A little less watching.<br /><span>A lot more trying.</span></h1><Asterisk size={83} strokeWidth={1.2} aria-hidden="true" /></div><p>Click around. Try a workflow. See how it feels.<br />Four working experiences, built to give your next idea a head start.</p><div className="directory-hero-note"><span className="status-dot" /> Interactive demonstrations · sample data · browser-local actions</div></Container></section><section className="studio-section"><Container><div className="demo-directory-grid">{allDemos.map(demo => <DemoCard key={demo.slug} demo={demo} />)}</div></Container></section><section className="studio-section bg-surface-muted"><Container><EnquiryCta headline="Now imagine it made for you." copy="Your brand, your customers, your way of working. Let’s talk about an experience built around your business." ctaText="Tell us what you have in mind" sourceContext="demos-directory" /></Container></section></>;
}
