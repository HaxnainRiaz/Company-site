import type { PreviewMode } from './product-preview';
import { ProductPreview } from './product-preview';
const labels:Record<PreviewMode,{eyebrow:string;title:string;detail:string}> = {
 'admin-dashboard':{eyebrow:'THE OPERATIONS WORKSPACE',title:'Everything in view.',detail:'Orders. Activity. The bigger picture.'},
 'retail-pos':{eyebrow:'THE MODERN RETAIL COUNTER',title:'A better everyday.',detail:'Fast checkout, with stock in the loop.'},
 'ecommerce-store':{eyebrow:'THE CONSIDERED STOREFRONT',title:'Made to be discovered.',detail:'A little more care in every click.'},
 'booking-flow':{eyebrow:'THE CUSTOMER CONVERSATION',title:'Your next hello.',detail:'A clear route from question to appointment.'},
};
export function DemoPoster({mode}:{mode:PreviewMode}) {
 const content=labels[mode];
 return <div className={`demo-poster poster-${mode}`}><div className="poster-copy"><span>{content.eyebrow}</span><h3>{content.title}</h3><p>{content.detail}</p></div><div className="poster-orbit" aria-hidden="true"/><div className="poster-device"><ProductPreview mode={mode}/></div><span className="poster-label">INTERACTIVE CONCEPT / SAMPLE DATA</span></div>;
}
