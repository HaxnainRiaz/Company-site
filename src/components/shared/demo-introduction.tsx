import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import type { DemoItem, DemoSlug } from '@/types/content';

export const demoThemes: Record<DemoSlug, string> = {'admin-dashboard':'website','retail-pos':'retail','ecommerce-store':'commerce','booking-flow':'clinic'};
const introductions: Record<DemoSlug,{title:string; label:string; task:string; copy:string}> = {
  'admin-dashboard':{copy:'Keep orders, customers, and the next action in one clear view. Explore a workspace designed to help the team act on the details.',title:'A workspace that keeps the details together.',label:'EXPLORE / THE OPERATIONS WORKSPACE',task:'Find an order. Filter the records. See the context.'},
  'retail-pos':{copy:'From a quick product scan to a clear receipt, see how a sale keeps the counter and stockroom in step.',title:'Step behind the counter.',label:'EXPLORE / THE RETAIL COUNTER',task:'Build a basket and explore the checkout flow.'},
  'ecommerce-store':{copy:'Discover the products, look closer at the details, and follow a considered path from browsing to a ready-to-check-out basket.',title:'Take the store for a little shopping trip.',label:'EXPLORE / THE ONLINE STOREFRONT',task:'Explore the collection and add a product to your basket.'},
  'booking-flow':{copy:'Find the right service, choose a convenient time, and leave with a clear confirmation. A little less back-and-forth for everyone.',title:'A booking journey with room to breathe.',label:'EXPLORE / THE APPOINTMENT EXPERIENCE',task:'Choose a service, pick a time, and try the booking flow.'},
};
export function DemoIntroduction({demo}:{demo:DemoItem}) {
  const intro=introductions[demo.slug];
  return <section className="demo-introduction"><Container><nav className="offering-breadcrumb" aria-label="Breadcrumb"><Link href="/demos">Interactive demos</Link><span>/</span><span aria-current="page">{demo.title}</span></nav><div className="demo-intro-layout"><div><span className="offering-eyebrow">{intro.label}</span><h1>{intro.title}</h1><p>{intro.copy}</p></div><div className="demo-preview-story" data-reveal><Image className="demo-intro-image" src={`/images/offerings/${demoThemes[demo.slug]}.webp`} width={1000} height={667} alt={`${demo.title} interface illustration`} sizes="(max-width:767px) 90vw, 38vw" preload/><div className="demo-task"><span>TRY IT FOR YOURSELF</span><strong>{intro.task}</strong><small>Illustrative data. Browser-local actions. No real orders, payments, or bookings are created.</small><a href="#demo-workspace">Go to the demo<ArrowRight size={16}/></a></div></div></div></Container></section>;
}
