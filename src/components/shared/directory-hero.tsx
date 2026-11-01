import type { ReactNode } from 'react';
import { Asterisk } from 'lucide-react';
import { Container } from '@/components/ui/container';
export function DirectoryHero({ eyebrow, title, description, note }: { eyebrow: string; title: ReactNode; description: ReactNode; note?: string }) {
 return <section className="directory-hero"><Container><span className="eyebrow">{eyebrow}</span><div className="directory-hero-row"><h1>{title}</h1><Asterisk size={83} strokeWidth={1.2} aria-hidden="true" /></div><p>{description}</p>{note && <div className="directory-hero-note">{note}</div>}</Container></section>;
}
