import { ArrowRight, AudioLines, Barcode, CalendarDays, Check, FileText, Globe2, Image as ImageIcon, Layers, LockKeyhole, MapPin, MessageCircle, Package, Search, Send, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Users, Workflow } from 'lucide-react';
import type { ServiceVisualKind } from '@/content/visuals';

const motifs = {
  website:[[Globe2,ImageIcon,Send],[Users,LockKeyhole,FileText],[Layers,Workflow,ShieldCheck]],
  commerce:[[Search,ImageIcon,ShoppingBag],[ShoppingBag,Check,Package],[Users,Sparkles,MessageCircle]],
  mobile:[[ImageIcon,Smartphone,Check],[Smartphone,CalendarDays,Check],[ShieldCheck,Send,Sparkles]],
  voice:[[AudioLines,MessageCircle,CalendarDays],[FileText,Workflow,Check],[Users,ShieldCheck,MessageCircle]],
  automation:[[FileText,Search,Check],[Workflow,Users,Check],[Layers,Send,ShieldCheck]],
  retail:[[Barcode,ShoppingBag,Check],[Package,Workflow,Package],[Users,FileText,ShieldCheck]],
  seo:[[Globe2,Search,Check],[FileText,Layers,Sparkles],[MapPin,MessageCircle,Users]],
  social:[[Users,Search,Sparkles],[ImageIcon,CalendarDays,Send],[MessageCircle,Users,Check]],
};
export function CapabilityMotif({kind,index}:{kind:ServiceVisualKind;index:number}) {
  return <div className={`capability-motif motif-${kind}`} data-animate aria-hidden="true">{motifs[kind][index].map((Icon,i)=><span key={i} className="motif-step"><span className="motif-icon"><Icon size={21} strokeWidth={1.4}/></span>{i<2&&<span className="motif-connector"><i/><ArrowRight size={12}/></span>}</span>)}</div>;
}
