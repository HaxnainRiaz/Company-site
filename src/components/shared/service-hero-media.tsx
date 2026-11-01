'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowUpRight, Check, Plus, X } from 'lucide-react';
import { offeringMedia } from '@/content/offering-media';
import type { ServiceVisualKind } from '@/content/visuals';

export function ServiceHeroMedia({kind}:{kind:ServiceVisualKind}) {
  const [open,setOpen]=useState(false);
  const media=offeringMedia[kind];
  const trigger=useRef<HTMLButtonElement>(null);
  const close=()=>{setOpen(false);trigger.current?.focus();};
  return <figure className={`service-hero-media hero-media-${kind}`} data-animate onKeyDown={event=>{if(event.key==='Escape')close();}}>
    <div className="hero-media-orbit" aria-hidden="true"/>
    <Image className="hero-generated-image" src={`/images/offerings/${kind}.webp`} alt={media.alt} width={1000} height={667} sizes="(max-width:767px) 90vw, 43vw" preload/>
    <span className="hero-media-tag"><span/> {kind==='mobile'?'iOS & Android':kind==='voice'?'Voice + chat':kind==='automation'?'Connected by design':kind==='retail'?'Counter + stock':kind==='seo'?'Search + local':kind==='social'?'Strategy + creative':kind==='commerce'?'Storefront + operations':'Website + workspace'}</span>
    <button type="button" ref={trigger} className="hero-media-hotspot" aria-expanded={open} aria-controls={`hero-note-${kind}`} onClick={()=>setOpen(!open)}><span>{open?<X size={15}/>:<Plus size={15}/>}</span>{media.label}</button>
    {open&&<div id={`hero-note-${kind}`} className="hero-media-note" role="region" aria-label="About this concept"><Check size={18}/><p>{media.note}</p><button type="button" aria-label="Close illustration note" onClick={close}><X size={14}/></button></div>}
    <figcaption>ORIGINAL CONCEPT / {kind==='mobile'?'A LITTLE PREVIEW OF WHAT’S POSSIBLE':'DESIGNED AROUND YOUR SERVICE'}<ArrowUpRight size={12}/></figcaption>
  </figure>;
}
