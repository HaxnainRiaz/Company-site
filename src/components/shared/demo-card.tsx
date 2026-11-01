import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {DemoPoster} from './demo-poster';
import type {DemoItem} from '@/types/content';
import {cn} from '@/lib/cn';
export function DemoCard({demo,className}:{demo:DemoItem;className?:string}){
 return <article className={cn('demo-directory-card',className)}><Link href={`/demos/${demo.slug}`} className="demo-card-preview"><DemoPoster mode={demo.slug}/><span className="demo-card-launch"><ArrowUpRight size={23}/><span className="sr-only">Open {demo.title}</span></span></Link><div className="demo-card-copy"><span className="eyebrow">{demo.category}</span><h3><Link href={`/demos/${demo.slug}`}>{demo.title}</Link></h3><p>{demo.summary}</p><Link href={`/demos/${demo.slug}`} className="plain-link">Try the experience <ArrowUpRight size={17}/></Link></div></article>;
}
