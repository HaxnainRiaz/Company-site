import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Asterisk, Check, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import type { HomeHeroContent } from '@/content/home';
export function HomeHeroSection({ content }: { content: HomeHeroContent }) {
  return <section className="home-hero" aria-labelledby="hero-heading"><Container>
    <div className="hero-topline"><span><span className="status-dot" /> Independent thinking. Connected solutions.</span><span>DESIGN · BUILD · AUTOMATE</span></div>
    <div className="hero-grid"><div className="hero-copy"><h1 id="hero-heading">Good ideas.<br />Great digital.<br /><span>Real impact.</span><Asterisk className="hero-asterisk" aria-hidden="true" /></h1>
    <p>We turn your next big move into websites, business tools, and automations that work beautifully together.</p>
    <div className="hero-actions"><Link href={content.primaryCtaHref} className="studio-button">Let’s build something <ArrowUpRight size={19} /></Link><Link href="#selected-work" className="plain-link">Explore our work <ArrowDown size={17} /></Link></div>
    <div className="hero-footnote"><span className="mini-mark"><Sparkles size={17} /></span><span>Thoughtfully designed.<br /><strong>Built around your business.</strong></span></div></div>
    <div className="hero-visual"><div className="hero-photo"><Image src="/images/stock/studio-collaboration.webp" alt="Creative collaborators reviewing a laptop around a studio table; contextual stock photograph" fill sizes="(max-width: 767px) 100vw, 48vw" preload /><span className="photo-caption">A little collaboration. A lot of possibility.</span></div><div className="hero-stamp" aria-hidden="true"><Asterisk size={38} /><span>Built with<br />intention.</span></div>
    <div className="hero-floating"><span className="floating-icon"><Check size={21} /></span><div><strong>Everything, connected.</strong><span>Your website. Your tools. Your next chapter.</span></div><span className="floating-spark" aria-hidden="true">✳</span></div><span className="image-credit">Creative collaboration · stock photography</span></div></div>
    <div className="hero-bottom"><span>From the first hello to the everyday workflow.</span><Link href="#services">A better way forward <ArrowDown size={16} /></Link></div>
  </Container></section>;
}
