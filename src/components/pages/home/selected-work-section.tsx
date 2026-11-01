'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { DemoPoster } from '@/components/shared/demo-poster';
const projects = [
 { title:'A clearer picture of every working day.', category:'Operations / Business dashboard', slug:'admin-dashboard' as const, number:'01' },
 { title:'Everyday commerce, thoughtfully connected.', category:'Commerce / Digital storefront', slug:'ecommerce-store' as const, number:'02' },
 { title:'Keep the counter moving. Keep stock in view.', category:'Retail / POS & inventory', slug:'retail-pos' as const, number:'03' },
 { title:'A better welcome, even after hours.', category:'Automation / Customer conversations', slug:'booking-flow' as const, number:'04' },
];
export function SelectedWorkSection() {
 const [active,setActive]=useState(0);
 const [touchStart,setTouchStart]=useState<number|null>(null);
 const move=(direction:number)=>setActive(value=>(value+direction+projects.length)%projects.length);
 return <section className="studio-section work-section" id="selected-work"><Container><div className="section-top"><span className="eyebrow">02 / IDEAS IN ACTION</span><span className="preview-tag">ORIGINAL STUDIO DEMONSTRATIONS</span></div><div className="section-title-row"><h2>Good ideas.<br /><span className="muted-heading">Working beautifully.</span></h2><div className="work-heading-end"><p>A closer look at the digital experiences<br />we can build around your business.</p><div className="slider-controls"><button className="circle-button" onClick={()=>move(-1)} aria-label="Previous project"><ArrowLeft size={20}/></button><button className="circle-button" onClick={()=>move(1)} aria-label="Next project"><ArrowRight size={20}/></button></div></div></div><div className="project-slider" role="region" aria-roledescription="carousel" aria-label="Studio projects" tabIndex={0} onKeyDown={event=>{if(event.key==='ArrowRight')move(1);if(event.key==='ArrowLeft')move(-1);}} onTouchStart={event=>setTouchStart(event.touches[0].clientX)} onTouchEnd={event=>{if(touchStart!==null){const delta=touchStart-event.changedTouches[0].clientX;if(Math.abs(delta)>45)move(delta>0?1:-1);}setTouchStart(null);}}><div className="project-slider-track" style={{transform:`translateX(-${active*100}%)`}}>{projects.map((project,index)=><article className="project-slide" key={project.slug} aria-hidden={active!==index} inert={active!==index}><Link href={`/demos/${project.slug}`} className="project-poster-link"><DemoPoster mode={project.slug}/><span className="project-open"><ArrowUpRight size={22}/><span className="sr-only">Try {project.category}</span></span></Link><div className="project-slide-caption"><div><span>{project.category}</span><h3>{project.title}</h3></div><Link href={`/demos/${project.slug}`} className="plain-link">Explore the experience <ArrowUpRight size={18}/></Link></div></article>)}</div></div><div className="slider-bottom"><span aria-live="polite">0{active+1} / 04</span><div className="slider-dots">{projects.map((project,index)=><button key={project.slug} className={active===index?'active':''} aria-label={`Show project ${index+1}`} aria-pressed={active===index} onClick={()=>setActive(index)}/>)}</div><Link href="/work" className="plain-link">All studio work <ArrowUpRight size={16}/></Link></div></Container></section>;
}
