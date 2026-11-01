import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {DemoPoster} from './demo-poster';
import type {ProjectRecord} from '@/content/projects';
import {cn} from '@/lib/cn';
export function ProjectCard({project,className}:{project:ProjectRecord;className?:string}){
 const mode=project.slug.includes('retail')?'retail-pos':'admin-dashboard';
 return <article className={cn('demo-directory-card',className)}><Link href={`/work/${project.slug}`} className="demo-card-preview"><DemoPoster mode={mode}/><span className="demo-card-launch"><ArrowUpRight size={23}/><span className="sr-only">View {project.title}</span></span></Link><div className="demo-card-copy"><span className="eyebrow">{project.category}</span><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.context}</p><Link href={`/work/${project.slug}`} className="plain-link">Behind the build <ArrowUpRight size={17}/></Link></div></article>;
}
