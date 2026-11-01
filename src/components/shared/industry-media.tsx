import Image from 'next/image';
import { ArrowDown, Check, Clock, Package, Sparkles } from 'lucide-react';
import type { SolutionSlug } from '@/types/content';
import { StudioCompanion } from './studio-companion';

const scenes = {
  'retail-pharmacy': {image:'retail', alt:'Illustrated retail counter with a connected scanner, receipt printer and stock', label:'THE CONNECTED COUNTER', title:'One scan starts the story.', steps:['Sale recorded','Stock updated','Shift reconciled'], tip:'The counter is only the beginning. We connect the sale to stock movement, staff permissions, and your daily close.'},
  'clinics-appointments': {image:'clinic', alt:'Illustrated appointment calendar and a phone showing a confirmed visit', label:'A MORE CONSIDERED VISIT', title:'Before they walk through the door.', steps:['Time requested','Details confirmed','Reminder sent'], tip:'A booking request and a confirmed appointment are different states. Your team stays in control of availability and exceptions.'},
  'ecommerce-brands': {image:'commerce', alt:'Illustrated product storefront and checkout for a violet headphone collection', label:'THE BRAND, ALL THE WAY THROUGH', title:'From first look to the last detail.', steps:['Discover','Choose','Receive'], tip:'Good brand work continues after checkout: clear order updates, considered fulfilment, and an easy way to get help.'},
  'service-businesses': {image:'website', alt:'Illustrated business website connected to a team workspace', label:'EVERY ENQUIRY HAS A NEXT STEP', title:'A conversation worth continuing.', steps:['New enquiry','Owner assigned','Follow-up ready'], tip:'A useful enquiry brings the relevant details with it, so your team can respond with context instead of starting again.'},
};

export function IndustryMedia({slug}:{slug:SolutionSlug}) {
  const scene=scenes[slug];
  return <figure className={`industry-media industry-media-${slug}`} data-reveal>
    <div className="industry-media-caption"><Sparkles size={14}/><span>{scene.label}</span></div>
    <Image src={`/images/offerings/${scene.image}.webp`} alt={scene.alt} width={1000} height={667} sizes="(max-width:767px) 90vw, 40vw" preload/>
    <figcaption><strong>{scene.title}</strong><div className="industry-mini-flow" data-animate>{scene.steps.map((step,index)=><span key={step}>{index===0?<Package size={14}/>:index===1?<Clock size={14}/>:<Check size={14}/>}<small>{step}</small>{index<2&&<ArrowDown size={12}/>}</span>)}</div></figcaption>
    <StudioCompanion label="Behind this journey" tip={scene.tip}/>
  </figure>;
}

const contextPhotos: Record<SolutionSlug,{src:string;alt:string;caption:string}> = {
  'retail-pharmacy':{src:'stock/retail-checkout',alt:'A retailer working at the checkout',caption:'At the counter, every detail counts.'},
  'clinics-appointments':{src:'stock/appointment-workspace',alt:'An organised appointment workspace',caption:'A little preparation makes room for people.'},
  'ecommerce-brands':{src:'editorial/commerce-lifestyle',alt:'A carefully presented retail product collection',caption:'Carry the feeling of your brand into every touchpoint.'},
  'service-businesses':{src:'editorial/project-discovery',alt:'A collaborative discussion around project details',caption:'Start the next conversation with the right context.'},
};
export function IndustryContextPhoto({slug}:{slug:SolutionSlug}) {
  const photo=contextPhotos[slug];
  return <figure className="industry-context-photo" data-reveal><Image src={`/images/${photo.src}.webp`} width={800} height={500} alt={photo.alt} sizes="(max-width:767px) 90vw, 42vw"/><figcaption>{photo.caption}</figcaption></figure>;
}
