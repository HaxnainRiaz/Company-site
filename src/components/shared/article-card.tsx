import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import type {ArticleItem} from '@/types/content';
export const articleImages:Record<string,string>={'website-or-dashboard':'/images/editorial/engineering-workspace.webp','choosing-retail-pos':'/images/stock/retail-checkout.webp','first-workflow-to-automate':'/images/editorial/warehouse-operations.webp'};
export function ArticleCard({article}:{article:ArticleItem}){
 return <article className="editorial-article-card"><Link href={`/insights/${article.slug}`}><Image src={articleImages[article.slug]} alt="Contextual photograph illustrating the article topic" fill sizes="(max-width:767px) 100vw, 33vw"/><span><ArrowUpRight size={21}/><span className="sr-only">Read {article.title}</span></span></Link><div><span>{article.readingTime} / STUDIO NOTES</span><h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><Link href={`/insights/${article.slug}`} className="plain-link">Read the story <ArrowUpRight size={15}/></Link></div></article>;
}
