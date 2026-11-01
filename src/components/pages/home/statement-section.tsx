import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
export function StatementSection() {
 return <section className="statement-section"><Container><span className="eyebrow">A LITTLE GOOD DESIGN CAN GO A LONG WAY.</span><h2 className="scroll-fill">Your digital should feel as ambitious as you are.</h2><div className="statement-bottom"><p>We bring the creative thinking and the technical know-how.<br />You bring the thing you want to change.</p><Link href="/about" className="plain-link">That’s where we come in <ArrowUpRight size={17} /></Link></div></Container></section>;
}
