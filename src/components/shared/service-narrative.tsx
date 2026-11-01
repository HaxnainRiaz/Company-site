import { ArrowDown, ArrowRight, Check, GitBranch, Globe2, Headphones, Layers, MapPin, Package, Smartphone, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { CapabilityMotif } from './capability-motif';
import { offeringStories } from '@/content/offering-stories';
import type { ServiceVisualKind } from '@/content/visuals';
import type { ServiceItem } from '@/types/content';

const marks = { website: Globe2, commerce: Package, mobile: Smartphone, voice: Headphones, automation: GitBranch, retail: Package, seo: MapPin, social: Sparkles };

export function ServiceNarrative({ kind }: { kind: ServiceVisualKind }) {
  const story = offeringStories[kind];
  const Mark = marks[kind];
  return <section className={`offering-section narrative narrative-${kind}`} id="journey"><Container>
    <div className="offering-section-heading"><div><span className="offering-eyebrow">{kind === 'social' ? 'THE CONTENT CYCLE' : 'THE EXPERIENCE, EXPLAINED'}</span><h2>{story.journeyTitle}</h2></div><p>{story.journeyIntro}</p></div>
    <div className="narrative-layout">
      {kind === 'website' && <div className="narrative-context"><Globe2 size={28}/><strong>For your customers</strong><span>Understand → enquire → stay informed</span><div/><Layers size={28}/><strong>For your team</strong><span>Review → organise → deliver</span></div>}
      {kind === 'mobile' && <div className="narrative-context"><Smartphone size={40}/><span>THE PRODUCT PRINCIPLE</span><strong>One task.<br/>Done well.</strong><p>The best starting point is a journey people can finish, not a long list of features.</p></div>}
      {kind === 'voice' && <div className="narrative-context"><Headphones size={30}/><span>AN EXAMPLE HANDOFF</span><blockquote>“I need help with something outside the usual booking.”</blockquote><p>“I’ll pass your request and the details you’ve shared to the team.”</p><small>A person takes over when judgement is needed.</small></div>}
      {kind === 'retail' && <div className="narrative-context receipt-context"><Package size={30}/><span>THE DAILY CLOSE</span><strong>More than<br/>a sales total.</strong><p>Sales recorded <Check size={16}/></p><p>Stock movements visible <Check size={16}/></p><p>Cash drawer reviewed <Check size={16}/></p><small>Illustrative operational checklist</small></div>}
      {kind === 'seo' && <div className="narrative-context"><MapPin size={32}/><span>THE SEARCH OPPORTUNITY</span><strong>Be useful.<br/>Be relevant.<br/>Be findable.</strong><p>Search performance takes time. Rankings and enquiry volumes are not guaranteed.</p></div>}
      {kind === 'social' && <div className="narrative-context"><Sparkles size={32}/><span>THE CREATIVE BRIEF</span><strong>What should<br/>people feel,<br/>learn, or do?</strong><p>A good brief gives every post a reason to exist.</p></div>}
      <ol className="narrative-stages">{story.stages.map((stage,index)=><li key={stage.title}><span className="narrative-index">{String(index+1).padStart(2,'0')}</span><div><span className="narrative-output">{stage.output}</span><h3>{stage.title}</h3><p>{stage.copy}</p></div>{index<2&&<ArrowRight className="narrative-arrow" size={22}/>}</li>)}</ol>
      {kind === 'automation' && <div className="automation-exception"><GitBranch size={23}/><div><strong>And when something doesn’t go to plan?</strong><p>Route the exception to a person, keep the original record, and provide a visible retry path.</p></div><span>Human review <ArrowDown size={16}/></span></div>}
      {kind === 'commerce' && <div className="commerce-continuity"><span>THE CUSTOMER SEES <strong>A simple purchase.</strong></span><ArrowRight size={25}/><span>YOUR TEAM GETS <strong>An order ready to act on.</strong></span></div>}
    </div>
    <div className="narrative-principle"><Mark size={18}/><span>{story.promise}</span></div>
  </Container></section>;
}

export function ServiceCapabilities({ service, kind }: { service: ServiceItem; kind: ServiceVisualKind }) {
  const story = offeringStories[kind];
  const groups: Record<ServiceVisualKind, number[][]> = {
    website: [[0,1,2,3,4],[5,6,7,8],[9,10,11]],
    commerce: [[0,1,2,3],[4,5,6,7],[8,9,10,11]],
    mobile: [[0,1],[2,3,4,5,6,7,8],[9,10,11]],
    voice: [[0,1,2,3,4],[5,6,7],[8,9]],
    automation: [[0,1,2,3],[4,5,6,7],[8,9,10,11]],
    retail: [[0,1,2],[3,4,5,6,7],[8,9,10,11]],
    seo: [[0,5],[1,2,3,4],[6,7,8,9,10,11]],
    social: [[0,1,2],[3,4,5,6],[7,8,9,10,11]],
  };
  return <section className={`offering-section offering-scope scope-${kind}`} id="scope"><Container>
    <div className="offering-section-heading"><div><span className="offering-eyebrow">WHAT WE CAN BUILD TOGETHER</span><h2>{story.scopeTitle}</h2></div><p>Choose the parts your business needs. We agree the features, integrations, and boundaries before work begins.</p></div>
    <div className="scope-groups">{story.groups.map((group,index)=><article className="scope-group" key={group}><header><span>{String(index+1).padStart(2,'0')}</span><h3>{group}</h3><CapabilityMotif kind={kind} index={index}/></header><div>{groups[kind][index].map((subIndex,i)=>{const sub=service.subservices[subIndex];return <details key={sub.title} open={i===0}><summary>{sub.title}<span aria-hidden="true">+</span></summary><p>{sub.description}</p></details>;})}</div></article>)}</div>
  </Container></section>;
}

