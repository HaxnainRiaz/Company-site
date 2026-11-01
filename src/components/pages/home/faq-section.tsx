import { Container } from '@/components/ui/container';
import { FaqList } from '@/components/shared/faq-list';
import { homeContent } from '@/content/home';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function HomeFaqSection() {
 return <section className="studio-section home-faq"><Container><div className="section-top"><span className="eyebrow">07 / A FEW GOOD QUESTIONS</span></div><div className="faq-layout"><div><h2>Glad you<br /><span className="muted-heading">asked.</span></h2><p>Getting started should feel simple.<br />Here are a few things you might be wondering.</p><Link href="/contact" className="plain-link">Ask us something else <ArrowUpRight size={17} /></Link></div><FaqList faqs={homeContent.faqs} /></div></Container></section>;
}
