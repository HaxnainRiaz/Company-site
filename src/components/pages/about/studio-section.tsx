import Image from 'next/image';
import { Code2, Compass, HeartHandshake, PencilRuler, Workflow } from 'lucide-react';
import { Container } from '@/components/ui/container';
const values = [
 { icon: Compass, title: 'Understand before we build.', copy: 'A good brief starts with your business. We explore how your customers think and how your team works before choosing a solution.' },
 { icon: PencilRuler, title: 'Care about the details.', copy: 'The clear form label. The smooth checkout. The right information at the right moment. Useful experiences come from considered details.' },
 { icon: HeartHandshake, title: 'Keep the conversation open.', copy: 'Clear scope, working previews, and honest conversations. You should always know what is happening and what comes next.' },
];
const roles = [{ icon: PencilRuler, title: 'Design', copy: 'Brand expression, interfaces, and customer journeys.' }, { icon: Code2, title: 'Engineering', copy: 'Responsive websites and reliable business software.' }, { icon: Workflow, title: 'Automation', copy: 'Connected workflows that give your people time back.' }];
export function AboutStudioSection() {
 return <section className="studio-section"><Container><div className="about-editorial-photo"><Image src="/images/editorial/engineering-workspace.webp" alt="A software development workstation; contextual stock photograph" fill sizes="100vw" /><span>Better ideas, together. · Contextual stock photography</span></div><div className="section-title-row about-section-title"><h2>Different disciplines.<br /><span className="muted-heading">One shared direction.</span></h2><p>We connect creative thinking with practical technology. These are the disciplines behind the work; verified team profiles can be added when ready.</p></div><div className="studio-roles">{roles.map(role => <div key={role.title}><role.icon size={30} strokeWidth={1.3} /><h3>{role.title}</h3><p>{role.copy}</p></div>)}</div><div className="studio-values"><span className="eyebrow">A FEW THINGS WE BELIEVE IN</span>{values.map((value, i) => <article key={value.title}><span>0{i + 1}</span><value.icon size={25} strokeWidth={1.3} /><div><h3>{value.title}</h3><p>{value.copy}</p></div></article>)}</div></Container></section>;
}
