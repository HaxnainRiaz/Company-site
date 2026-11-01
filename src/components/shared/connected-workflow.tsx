'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, FileText, GitBranch, Pause, Play, Send, ShieldCheck, Users } from 'lucide-react';

/** A single clock drives the route, packet, node states, and activity receipt. */
export function ConnectedWorkflow({compact=false}:{compact?:boolean}) {
  const root=useRef<HTMLDivElement>(null);
  const [playing,setPlaying]=useState(true);
  const [exception,setException]=useState(false);
  const [progress,setProgress]=useState(0);
  const elapsed=useRef(0);
  useEffect(()=>{
    const element=root.current;if(!element)return;
    let visible=false;let frame=0;let previous=0;let painted=0;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;},{threshold:.1});observer.observe(element);
    const tick=(now:number)=>{
      const canRun=playing&&visible&&!reduced.matches&&!element.closest('.motion-paused')&&!document.hidden;
      if(canRun&&previous){elapsed.current+=(now-previous);if(elapsed.current>9200)elapsed.current=0;if(now-painted>40){setProgress(Math.min(elapsed.current/7600,1));painted=now;}}
      previous=now;frame=requestAnimationFrame(tick);
    };frame=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();};
  },[playing,exception]);
  const current=Math.min(3,Math.floor(progress*4));
  const nodes=[{icon:FileText,label:'Capture',value:'Website enquiry',detail:'Record #0142'},{icon:ShieldCheck,label:'Validate',value:'Check the details',detail:'Required fields + duplicates'},{icon:exception?Users:GitBranch,label:exception?'Review':'Route',value:exception?'A person takes over':'Assign the right owner',detail:exception?'Missing detail flagged':'Sales team · assigned'},{icon:Send,label:'Continue',value:'Send the next step',detail:'Context travels with the record'}];
  const path='M 100 90 H 300 Q 340 90 340 130 V 200 Q 340 240 380 240 H 620 Q 660 240 660 200 V 130 Q 660 90 700 90 H 900';
  return <div ref={root} className={`connected-workflow ${compact?'connected-compact':''}`}>
    <div className="connected-toolbar"><span><i/>ONE RECORD. ONE CONTINUOUS JOURNEY.</span><button onClick={()=>setPlaying(!playing)} aria-pressed={!playing}>{playing?<Pause size={14}/>:<Play size={14}/>}<span>{playing?'Pause flow':'Play flow'}</span></button></div>
    <div className="connected-canvas">
      <svg className="connected-route" viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true"><path d={path} pathLength="1000"/><path className="route-filled" d={path} pathLength="1000" strokeDasharray={`${progress*1000} 1000`}/><path className="route-packet" d={path} pathLength="1000" strokeDasharray="12 1000" strokeDashoffset={-progress*988}/></svg>
      <svg className="connected-mobile-route" viewBox="0 0 100 480" preserveAspectRatio="none" aria-hidden="true"><path d="M 4 50 V 425 M 4 50 H 14 M 4 175 H 14 M 4 300 H 14 M 4 425 H 14"/><path className="route-filled" d="M 4 50 V 425" pathLength="1000" strokeDasharray={`${progress*1000} 1000`}/><path className="route-packet" d="M 4 50 V 425" pathLength="1000" strokeDasharray="18 1000" strokeDashoffset={-progress*982}/></svg>
      <div className="connected-nodes">{nodes.map((node,index)=>{const Icon=node.icon;return <div key={node.label} className={`connected-node connected-node-${index} ${current>=index?'node-reached':''} ${current===index?'node-current':''}`}><span className="node-port"/><div><span>0{index+1} / {node.label}</span>{current>index?<Check size={18}/>:<Icon size={18}/>}</div><strong>{node.value}</strong><small>{node.detail}</small><span className="node-port node-port-out"/></div>;})}</div>
      <div className="flow-record"><FileText size={16}/><span>enquiry_0142</span><span>{['Captured','Validated',exception?'In review':'Assigned','Notification ready'][current]}</span><ArrowRight size={14}/></div>
    </div>
    <div className="connected-footer"><label><input type="checkbox" checked={exception} onChange={e=>{setException(e.target.checked);elapsed.current=0;setProgress(0);}}/>Try the human-review route</label><span>{progress===1?'The full record arrives together.':'Follow the light: the same record moves through every step.'}</span></div>
    <p className="connected-accessible-note">Illustrative workflow: capture an enquiry, validate its details, {exception?'route an exception to a person':'assign an owner'}, then send a notification with the original context.</p>
  </div>;
}
