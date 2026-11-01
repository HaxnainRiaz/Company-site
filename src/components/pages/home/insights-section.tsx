import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {Container} from '@/components/ui/container';
import {ArticleCard} from '@/components/shared/article-card';
import {allArticles} from '@/content/articles';
export function HomeInsightsSection(){
 return <section className="studio-section home-insights"><Container><div className="section-top"><span className="eyebrow">FROM THE STUDIO / THINGS WORTH KNOWING</span><Link href="/insights" className="plain-link">All our insights <ArrowUpRight size={16}/></Link></div><div className="section-title-row"><h2>A little perspective.<br /><span className="muted-heading">A better next move.</span></h2><p>Practical notes on the decisions behind better digital experiences and simpler business operations.</p></div><div className="editorial-article-grid">{allArticles.map(article=><ArticleCard key={article.slug} article={article}/>)}</div></Container></section>;
}
