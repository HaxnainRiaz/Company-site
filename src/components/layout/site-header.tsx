import Link from 'next/link';
import { Asterisk } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import { siteConfig } from '@/content/site';
export function SiteHeader() {
 return <header className="site-header">{!siteConfig.isPublicationReady && <div className="preview-notice"><span className="status-dot" /> Studio preview <span className="preview-notice-detail">· Sample figures & feedback are illustrative.</span></div>}<Container><div className="header-inner"><Link href="/" className="site-brand"><span className="brand-mark"><Asterisk size={28} strokeWidth={1.7} /></span><span>{siteConfig.name}<small>DIGITAL, WITH INTENTION.</small></span></Link><DesktopNavigation /><MobileNavigation /></div></Container><div className="reading-progress" aria-hidden="true" /></header>;
}
