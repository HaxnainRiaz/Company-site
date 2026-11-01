'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { technologyBrands } from '@/content/visuals';
export function CapabilitySection() {
 const [paused,setPaused]=useState(false);
 return <section className={`technology-section ${paused?'is-paused':''}`} aria-label="Technology brand showcase"><Container><div className="technology-heading"><div><span className="eyebrow">GREAT POSSIBILITIES. FAMILIAR TECHNOLOGY.</span><h2>Connected to the tools<br />your business runs on.</h2></div><p>A selection of platforms and technologies.<br />Brand marks identify their owners; they are not client endorsements.</p><button className="marquee-pause" onClick={()=>setPaused(!paused)} aria-label={paused?'Play logo animation':'Pause logo animation'}>{paused?<Play size={16}/>:<Pause size={16}/>}</button></div></Container>{[technologyBrands.slice(0,10),technologyBrands.slice(10,20)].map((row,index)=><div className={`logo-marquee ${index?'reverse':''}`} key={index}><div className="logo-track">{[0,1].map(copy=><div className="logo-group" aria-hidden={copy===1?true:undefined} key={copy}>{row.map(brand=><div className="technology-logo" key={brand.slug}><Image src={`/images/logos/${brand.slug}.svg`} alt="" width={30} height={30}/><span>{brand.name}</span></div>)}</div>)}</div></div>)}</section>;
}
