'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';

/** Progressive enhancement: content remains visible without JavaScript. */
export function OfferingMotion({ children, className }: {children: ReactNode; className: string}) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPaused(preference.matches);
    syncPreference();
    preference.addEventListener('change', syncPreference);
    const targets = element.querySelectorAll<HTMLElement>('[data-reveal], .offering-section-heading, .scope-group, .offering-difference-grid article, .offering-delivery-list li, .solution-module-grid > a, .solution-journey-steps > li');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('has-arrived');
        observer.unobserve(entry.target);
      }
    }), {threshold:0.12, rootMargin:'0px 0px -20px 0px'});
    targets.forEach((target,index) => {
      target.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
      target.classList.add('reveal-target');
      if (target.getBoundingClientRect().top < innerHeight) target.classList.add('has-arrived');
      observer.observe(target);
    });
    element.classList.add('motion-ready');
    const loops = element.querySelectorAll<HTMLElement>('[data-animate]');
    const loopObserver = new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-in-view',entry.isIntersecting)),{rootMargin:'60px'});
    loops.forEach(loop=>loopObserver.observe(loop));
    const fills = element.querySelectorAll<HTMLElement>('[data-scroll-fill]');
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -bounds.top / Math.max(1, bounds.height - innerHeight)));
      element.style.setProperty('--reading-progress', String(progress));
      fills.forEach(fill => {
        const rect = fill.getBoundingClientRect();
        const value = Math.max(0,Math.min(1,(innerHeight*.85-rect.top)/(innerHeight*.5)));
        fill.style.setProperty('--word-fill', `${value*100}%`);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    addEventListener('scroll', schedule, {passive:true});
    addEventListener('resize', schedule);
    update();
    return () => {
      observer.disconnect();loopObserver.disconnect();cancelAnimationFrame(frame);
      removeEventListener('scroll', schedule);removeEventListener('resize',schedule);
      preference.removeEventListener('change',syncPreference);
      element.classList.remove('motion-ready');
    };
  }, []);
  return <div ref={root} className={`${className} ${paused?'motion-paused':''}`}>
    <div className="offering-reading-progress" aria-hidden="true"/>
    {children}
    <button type="button" className="offering-motion-toggle" aria-pressed={paused} onClick={()=>setPaused(value=>!value)}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'Play motion':'Pause motion'}</span></button>
  </div>;
}
