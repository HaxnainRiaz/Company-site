import Link from 'next/link';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import { Container } from '@/components/ui/container';
export function HomeContactSection() {
 return <section className="home-contact"><Container><div className="contact-kicker"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><span>GOOD PEOPLE. GOOD IDEAS. LET’S TALK.</span></div><div className="contact-invitation"><h2>Have a good idea?<br />Let’s make it <span>happen.</span></h2><Link href="/contact" className="contact-orb" aria-label="Start a conversation about your project"><ArrowUpRight size={52} strokeWidth={1.3} /></Link></div><div className="contact-bottom"><p>A new website. A smoother workflow. Something completely new.<br />Tell us what you’re thinking.</p><Asterisk size={47} strokeWidth={1.3} aria-hidden="true" /></div></Container></section>;
}
