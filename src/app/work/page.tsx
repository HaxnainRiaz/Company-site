import { Container } from '@/components/ui/container';
import { SelectedWorkSection } from '@/components/pages/home/selected-work-section';
import { ProjectCard } from '@/components/shared/project-card';
import { allProjects } from '@/content/projects';
import { EnquiryCta } from '@/components/shared/enquiry-cta';
import { createPageMetadata } from '@/lib/metadata';
import { Asterisk } from 'lucide-react';
export const metadata = createPageMetadata({ title: 'Work & Studio Concepts', description: 'Explore original studio concepts, working prototypes, and the thinking behind them.', path: '/work' });
export default function WorkPage() {
 return <><section className="directory-hero"><Container><span className="eyebrow">THE STUDIO / SELECTED EXPLORATIONS</span><div className="directory-hero-row"><h1>Good thinking.<br /><span>Made tangible.</span></h1><Asterisk size={83} strokeWidth={1.2} aria-hidden="true" /></div><p>A collection of ideas brought to life through design and code.<br />Original studio demonstrations, ready for you to explore.</p><div className="directory-hero-note">Studio concepts and fictional brand identities are illustrative, not commissioned client projects.</div></Container></section><SelectedWorkSection /><section className="studio-section"><Container><div className="section-top"><span className="eyebrow">BEHIND THE EXPERIENCE</span></div><div className="section-title-row"><h2>More than the<br /><span className="muted-heading">finished picture.</span></h2><p>Explore the functional prototypes and the thinking that holds them together.</p></div><div className="demo-directory-grid">{allProjects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></Container></section><section className="studio-section bg-surface-muted"><Container><EnquiryCta headline="Your next project could start here." copy="Tell us about your idea. We’ll explore what it could become, together." sourceContext="work-directory" /></Container></section></>;
}
