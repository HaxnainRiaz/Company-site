import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Barcode, CalendarDays, Check, CheckCheck, FileText, Globe2, MapPin, MessageCircle, MousePointer2, Package, ShieldCheck, Search, ShoppingBag, Smartphone, Sparkles, Users, Workflow } from 'lucide-react';
import type { ServiceVisualKind } from '@/content/visuals';

export type IllustrationKind = ServiceVisualKind | 'clinic' | 'retail-solution' | 'brand' | 'business';

/** Compact concept illustrations, separate from the full interactive demos. */
export function OfferingIllustration({ kind }: { kind: IllustrationKind }) {
  return <figure className={`offering-art art-${kind}`} aria-label={`${kind} illustrative workflow`}>
    <div className="art-canvas">
      {kind === 'website' && <>
        <div className="art-browser"><div className="art-window-bar"><i/><i/><i/><span>yourbusiness.com</span></div><div className="art-site"><span>YOUR NEXT CHAPTER</span><strong>Good work.<br/>Clearly presented.</strong><div className="art-site-bottom"><span>Let’s talk <ArrowUpRight size={13}/></span><div className="art-sculpture"><Globe2 size={62} strokeWidth={1}/></div></div></div></div>
        <div className="art-connected"><span><ArrowDown size={15}/> Enquiry received</span><div><Users size={19}/><strong>Team workspace<small>New lead → assigned → followed up</small></strong><Check size={17}/></div></div><MousePointer2 className="art-cursor" size={28}/>
      </>}
      {(kind === 'commerce' || kind === 'brand') && <>
        <div className="art-product"><Image src="/images/products/ceramic-cup.webp" alt="Ceramic cup in an illustrative online store" width={230} height={230}/><span>THE EVERYDAY COLLECTION</span><strong>Objects worth keeping.</strong><small>Considered details. Clear product information.</small></div>
        <div className="art-order"><ShoppingBag size={23}/><strong>{kind === 'brand' ? 'An order, connected.' : 'From found to favourite.'}</strong><span><Check size={13}/> Product selected</span><span><Check size={13}/> Delivery chosen</span><span><Check size={13}/> Order ready to fulfil</span></div>
      </>}
      {kind === 'mobile' && <>
        <div className="art-mobile-note"><Smartphone size={23}/><span>DESIGNED FOR THE MOMENT</span><strong>A few taps.<br/>A useful outcome.</strong><p>Choose. Confirm.<br/>Get on with your day.</p></div><div className="art-phone"><div className="art-phone-notch"/><small>9:41 <span>● ▰</span></small><span className="art-phone-greeting">Good morning.</span><strong>What’s next?</strong><div className="art-phone-tile"><CalendarDays size={24}/><span>Your next appointment</span><b>Thursday, 10:30</b></div><p>Keep the details close.</p><div className="art-phone-line"><CheckCheck size={16}/> Booking confirmed</div><div className="art-phone-nav"><Globe2 size={17}/><CalendarDays size={17}/><Users size={17}/></div></div><span className="art-floating-label"><Check size={14}/> Made for everyday use</span>
      </>}
      {kind === 'voice' && <>
        <div className="art-voice-top"><span><AudioLines size={21}/> Your assistant</span><span className="art-status">Example conversation</span></div><div className="art-wave">{[14,24,40,23,54,35,64,42,23,49,32,57,24,38,17,28,13].map((h,i)=><i key={i} style={{height:h}}/>)}</div><div className="art-chat"><p>Can I book a consultation?</p><p>I can help with that. Which service are you interested in?</p></div><div className="art-handoff"><Users size={18}/><span>Need a person?<strong>Your team gets the context.</strong></span><ArrowRight size={17}/></div>
      </>}
      {kind === 'automation' && <>
        <div className="art-flow-node"><FileText size={20}/><span>New enquiry<small>Website form submitted</small></span><span className="art-status">Trigger</span></div><div className="art-flow-link"><ArrowDown size={17}/></div><div className="art-flow-node art-flow-check"><Workflow size={22}/><span>Validate & check<small>Required fields · duplicate records</small></span></div><div className="art-flow-fork"><div><span>VALID</span><ArrowDown size={17}/><strong><Check size={17}/> Assign owner</strong></div><div><span>NEEDS ATTENTION</span><ArrowDown size={17}/><strong><Users size={17}/> Human review</strong></div></div><div className="art-log"><CheckCheck size={15}/> Every step leaves an activity record.</div>
      </>}
      {(kind === 'retail' || kind === 'retail-solution') && <>
        <div className="art-stock"><span>THE STOCKROOM</span><Package size={45} strokeWidth={1}/><strong>Every item.<br/>Accounted for.</strong><div><span>Received</span><b>+24</b></div><div><span>Sold</span><b>−1</b></div><div><span>Available</span><b>23</b></div></div><div className="art-receipt"><Barcode size={45}/><span>YOUR STORE</span><strong>Sale complete.</strong><div><span>Everyday essentials</span><b>01</b></div><div><span>Payment recorded</span><Check size={14}/></div><hr/><div><span>Stock updated</span><Check size={14}/></div><small>Example transaction</small></div><span className="art-retail-link"><ArrowRight size={18}/> One connected record</span>
      </>}
      {kind === 'seo' && <>
        <div className="art-search"><Search size={19}/><span>the service your customer needs</span></div><div className="art-search-result"><span>YOUR BUSINESS · ORGANIC SEARCH</span><strong>A useful answer starts here.</strong><p>Relevant services. Helpful information.<br/>A clear way to get in touch.</p><div><span>Services</span><span>About</span><span>Contact</span></div></div><div className="art-map-card"><div className="art-map-grid"><MapPin size={31}/></div><div><span>LOCAL DISCOVERY</span><strong>Your business, accurately listed.</strong><small>Location · opening hours · services</small></div></div>
      </>}
      {kind === 'social' && <>
        <div className="art-social-post"><span>YOUR BRAND / YOUR POINT OF VIEW</span><Sparkles size={38} strokeWidth={1}/><strong>Make room<br/>for a little<br/><em>different.</em></strong><div>01 / THE BRAND STORY <ArrowUpRight size={18}/></div></div><div className="art-editorial"><span>THE EDITORIAL PLAN</span><div><b>MON</b><span>Tell the story<small>Brand carousel</small></span></div><div><b>WED</b><span>Show the detail<small>Short-form video</small></span></div><div><b>FRI</b><span>Start a conversation<small>Community post</small></span></div><p><Check size={13}/> Reviewed before publishing</p></div>
      </>}
      {kind === 'clinic' && <>
        <div className="art-appointment"><CalendarDays size={28}/><span>THE APPOINTMENT JOURNEY</span><strong>A calmer way<br/>to book.</strong><div className="art-dates">{['M','T','W','T','F'].map((d,i)=><span key={i}>{d}<b className={i===2?'selected':''}>{12+i}</b></span>)}</div><div className="art-times"><span>09:00</span><span>10:30 <Check size={12}/></span><span>14:00</span></div></div><div className="art-appointment-note"><CheckCheck size={22}/><strong>Details confirmed.<small>Reception stays in the loop.</small></strong></div>
      </>}
      {kind === 'business' && <>
        <div className="art-business-header"><MessageCircle size={23}/><strong>From “hello” to next steps.</strong></div><div className="art-pipeline">{[['01','New enquiry','The right details, captured.'],['02','Assigned to your team','One owner. Clear context.'],['03','Ready to follow up','A quote, call, or booking.']].map(([n,t,c])=><div key={n}><b>{n}</b><span><strong>{t}</strong><small>{c}</small></span><ArrowDown size={17}/></div>)}</div><div className="art-log"><ShieldCheck size={17}/> A clear owner at every stage</div>
      </>}
    </div>
    <figcaption><span/> ILLUSTRATIVE CONCEPT <span>DESIGNED AROUND THE WORK</span></figcaption>
  </figure>;
}
