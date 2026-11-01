import {Container} from '@/components/ui/container';
import {DirectoryHero} from '@/components/shared/directory-hero';
import {ArticleCard} from '@/components/shared/article-card';
import {EnquiryCta} from '@/components/shared/enquiry-cta';
import {allArticles} from '@/content/articles';
import {createPageMetadata} from '@/lib/metadata';
export const metadata=createPageMetadata({title:'Studio Notes & Insights',description:'Practical guides to websites, retail systems, and connected business workflows.',path:'/insights'});
export default function InsightsPage(){return <><DirectoryHero eyebrow="FROM THE STUDIO / USEFUL PERSPECTIVES" title={<>Good questions.<br/><span>Considered answers.</span></>} description="Practical notes to help you make more confident decisions about your business, your software, and what comes next."/><section className="studio-section"><Container><div className="editorial-article-grid">{allArticles.map(article=><ArticleCard key={article.slug} article={article}/>)}</div></Container></section><section className="studio-section bg-surface-muted"><Container><EnquiryCta headline="What are you thinking about?" copy="Bring your questions, your plans, and the things you want to make better." ctaText="Start a conversation" sourceContext="insights-directory"/></Container></section></>;}

