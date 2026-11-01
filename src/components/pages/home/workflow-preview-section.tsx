'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, AudioLines, LayoutDashboard, ScanLine, ShoppingBag } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ProductPreview, type PreviewMode } from '@/components/shared/product-preview';
const tabs = [
  { id: 'admin-dashboard' as const, label: 'Business dashboard', icon: LayoutDashboard, title: 'Your whole business.\nOne clear view.', copy: 'Less jumping between spreadsheets. More knowing exactly what’s happening. Explore searchable orders, live filters, and a calmer way to manage your day.' },
  { id: 'retail-pos' as const, label: 'Retail POS', icon: ScanLine, title: 'A smoother checkout.\nA better everyday.', copy: 'Find products, build a basket, and see stock update. Try a retail counter designed around the way real shops work.' },
  { id: 'ecommerce-store' as const, label: 'Online store', icon: ShoppingBag, title: 'Make browsing feel\nlike discovering.', copy: 'Considered products. A simple basket. A checkout that makes sense. Explore a shopping experience with all the right details.' },
  { id: 'booking-flow' as const, label: 'AI receptionist', icon: AudioLines, title: 'A warm welcome.\nEven after hours.', copy: 'Follow a sample conversation from the first question to a suggested appointment. See how thoughtful automation can help your team.' },
];
export function WorkflowPreviewSection() {
  const [mode, setMode] = useState<PreviewMode>('admin-dashboard');
  const current = tabs.find(tab => tab.id === mode)!;
  return <section className="studio-section demo-section" id="demo-lab"><Container><div className="section-top"><span className="eyebrow">03 / THE PLAYGROUND</span><span className="section-aside"><span className="status-dot" /> Made to be explored.</span></div><div className="section-title-row"><h2>Don’t just imagine it.<br /><span className="muted-heading">Take it for a spin.</span></h2><p>A few small windows into what we build.<br />Choose an experience. Then make it your own.</p></div><div className="demo-tabs" role="group" aria-label="Choose a demo preview">{tabs.map(tab => <button key={tab.id} aria-pressed={mode === tab.id} onClick={() => setMode(tab.id)}><tab.icon size={17} />{tab.label}</button>)}</div><div className="demo-stage"><div className="demo-stage-copy"><span className="preview-tag">INTERACTIVE STUDIO DEMONSTRATION</span><h3>{current.title.split('\n').map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3><p>{current.copy}</p><Link className="studio-button" href={`/demos/${mode}`}>Open the live demo <ArrowUpRight size={18} /></Link><span className="demo-note">Sample data. Real interactions. Nothing sent externally.</span></div><div className="demo-stage-visual" key={mode}><ProductPreview mode={mode} /></div></div></Container></section>;
}
