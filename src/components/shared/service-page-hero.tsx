import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { serviceVisuals } from '@/content/visuals';
import { offeringStories } from '@/content/offering-stories';
import { ServiceHeroMedia } from './service-hero-media';
import type { ServiceItem } from '@/types/content';

export function ServicePageHero({ service }: { service: ServiceItem }) {
  const { kind } = serviceVisuals[service.slug];
  const story = offeringStories[kind];
  return <section className="offering-hero"><Container>
    <nav className="offering-breadcrumb" aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><span aria-current="page">{service.shortTitle}</span></nav>
    <div className="offering-hero-grid"><div className="offering-hero-copy"><span className="offering-eyebrow">{story.label}</span><h1>{story.title}</h1><p>{story.promise}</p><div className="offering-actions"><Link href={`/contact?service=${service.slug}`} className="offering-button">{service.ctaText}<ArrowUpRight size={17}/></Link><a href="#journey">See how it works <ArrowRight size={16}/></a></div><div className="offering-hero-footnote">{service.shortTitle}<span>Built around your business.</span></div></div><ServiceHeroMedia kind={kind}/></div>
  </Container></section>;
}

