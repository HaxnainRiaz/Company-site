import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Compass, PencilRuler, Code2, Rocket, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/container';
const steps = [
 { title: 'First, we listen.', copy: 'Your goals, your customers, your everyday challenges. We ask the right questions before making a single design decision.', output: 'A shared direction', icon: Compass },
 { title: 'Give the idea a shape.', copy: 'We turn the brief into a clear scope, thoughtful wireframes, and a visual direction you can see and respond to.', output: 'A plan worth getting excited about', icon: PencilRuler },
 { title: 'Make it work beautifully.', copy: 'Design and development come together in a working preview. You see progress, try the experience, and help shape the details.', output: 'Your idea, brought to life', icon: Code2 },
 { title: 'Get every detail ready.', copy: 'We test the small screens, the unusual inputs, and the everyday journeys. Then we prepare a considered launch.', output: 'A carefully reviewed release', icon: Rocket },
 { title: 'Set you up for what’s next.', copy: 'Your code, your accounts, and clear documentation. We make sure you feel at home with the tools built for your business.', output: 'Ownership, clarity, and a way forward', icon: HeartHandshake },
];
export function HomeProcessSection() {
 return <section className="studio-section process-section" id="process"><Container><div className="section-top"><span className="eyebrow">04 / HOW WE GET THERE</span><span className="section-aside">Good work starts with a good conversation.</span></div><div className="process-layout"><div className="process-intro"><h2>From “what if”<br />to <span className="coral-text">“here it is.”</span></h2><p>No mystery. No disappearing acts. Just a clear, collaborative journey from your first idea to the final little detail.</p><Link href="/how-we-work" className="plain-link">Meet our process <ArrowUpRight size={17} /></Link><div className="process-photo"><Image src="/images/editorial/project-discovery.webp" alt="A collaborative project discussion; contextual stock photography" fill sizes="(max-width: 767px) 90vw, 32vw" /><span>Great things happen around a table.</span></div></div><div className="process-timeline"><div className="timeline-track" aria-hidden="true"><span /></div>{steps.map((step, i) => <article className="process-step" key={step.title}><span className="step-number">0{i + 1}</span><div><step.icon size={24} strokeWidth={1.4} aria-hidden="true" /><h3>{step.title}</h3><p>{step.copy}</p><span className="step-output"><Check size={14} />{step.output}</span></div></article>)}</div></div></Container></section>;
}
