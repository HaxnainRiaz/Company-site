import Image from 'next/image';
import { ArrowUpRight, Check, Layers, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import type { ServiceVisualKind } from '@/content/visuals';
import { offeringMedia } from '@/content/offering-media';
import { offeringStories } from '@/content/offering-stories';
import { StudioCompanion } from './studio-companion';

export function ServiceEditorial({kind}:{kind:ServiceVisualKind}) {
  const media=offeringMedia[kind];
  const story=offeringStories[kind];
  return <section className={`service-editorial editorial-${kind}`}><Container><div className="editorial-statement"><span className="offering-eyebrow">THE REASON BEHIND THE WORK</span><h2 data-scroll-fill><span className="scroll-fill-ink">{media.statement}</span></h2></div><div className="editorial-composition" data-reveal><figure className="editorial-service-photo" data-animate><Image src={`/images/editorial/${media.photo}.webp`} alt={media.photoAlt} width={800} height={580} sizes="(max-width:767px) 90vw, 40vw"/><figcaption><span>{media.caption}</span><ArrowUpRight size={20}/></figcaption><span className="editorial-photo-credit">Contextual photography</span></figure><div className="editorial-detail-stack"><span className="editorial-detail-title"><Layers size={17}/>A FEW DETAILS THAT MATTER</span>{story.stages.slice(0,2).map((item,index)=><article key={item.title}><span>0{index+1}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><Check size={17}/></article>)}<div className="editorial-floating-caption"><Sparkles size={18}/><span>{kind==='mobile'?'Prototype it. Feel it. Refine it.':kind==='voice'?'Thoughtful automation. Human judgement.':kind==='social'?'Your voice. A stronger visual rhythm.':kind==='retail'?'Designed for the people at the counter.':kind==='seo'?'Useful answers before empty promises.':kind==='commerce'?'A good experience, beyond the basket.':kind==='automation'?'Make the routine feel effortless.':'Considered design. Practical detail.'}</span></div><StudioCompanion tip={media.note}/></div></div></Container></section>;
}

