'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export function StudioCompanion({tip, label='A little useful detail'}:{tip:string;label?:string}) {
  const [open,setOpen]=useState(false);
  const id=useId();
  const trigger=useRef<HTMLButtonElement>(null);
  const close=()=>{setOpen(false);trigger.current?.focus();};
  return <div className={`studio-companion ${open?'companion-open':''}`} data-animate onKeyDown={event=>{if(event.key==='Escape')close();}}>
    <button type="button" ref={trigger} className="companion-trigger" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)}>
      <Image className="companion-character" src="/images/offerings/companion.webp" width={80} height={96} alt="" sizes="80px"/>
      <span><Sparkles size={12}/>{open?'Close studio note':label}</span>
    </button>
    {open&&<div className="companion-note" id={id} role="region" aria-label="Studio note"><button type="button" aria-label="Close studio note" onClick={close}><X size={14}/></button><span>FROM THE STUDIO</span><p>{tip}</p></div>}
  </div>;
}
