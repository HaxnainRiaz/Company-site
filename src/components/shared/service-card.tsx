import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '@/types/content';
import { serviceGroupLabels } from '@/content/site';
import { cn } from '@/lib/cn';
import { serviceVisuals } from '@/content/visuals';
export function ServiceCard({ service, className }: { service: ServiceItem; className?: string }) {
 return <article className={cn('service-directory-card', className)}><Link className="service-card-image" href={`/services/${service.slug}`}><Image src={`/images/editorial/${serviceVisuals[service.slug].image}.webp`} alt={`${serviceGroupLabels[service.group]} business context; stock photograph`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" /><span>{serviceGroupLabels[service.group]}</span><span className="service-card-arrow"><ArrowUpRight size={20} /><span className="sr-only">Explore {service.shortTitle}</span></span></Link><div className="service-card-copy"><h3><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></h3><p>{service.outcome}</p><ul>{service.subservices.slice(0, 3).map(sub => <li key={sub.title}>{sub.title}</li>)}</ul><Link className="plain-link" href={`/services/${service.slug}`}>Explore the possibilities <ArrowUpRight size={16} /></Link></div></article>;
}
