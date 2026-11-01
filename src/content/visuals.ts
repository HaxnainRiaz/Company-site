import type { ServiceSlug } from '@/types/content';
export type ServiceVisualKind = 'website' | 'commerce' | 'mobile' | 'voice' | 'automation' | 'retail' | 'seo' | 'social';
export const serviceVisuals: Record<ServiceSlug, { kind: ServiceVisualKind; title: string; accent: string; image: string; caption: string; benefit: string }> = {
 'websites-admin-dashboards': { kind:'website', title:'A better digital front door. A smarter way to work.', accent:'Design meets everyday utility.', image:'web-development', caption:'Designed for people. Engineered for purpose.', benefit:'Turn first impressions into meaningful next steps.' },
 'ecommerce-development': { kind:'commerce', title:'A store worth discovering. An experience worth returning to.', accent:'From first look to final checkout.', image:'commerce-lifestyle', caption:'A shopping experience that feels considered.', benefit:'Bring your products, customers, and operations together.' },
 'mobile-app-development': { kind:'mobile', title:'Your next big idea. Right in their hands.', accent:'Small screens. Thoughtful experiences.', image:'mobile-product', caption:'Built around the moments that matter.', benefit:'Make the useful things feel effortless on mobile.' },
 'ai-voice-chat-automation': { kind:'voice', title:'Every conversation. A better first impression.', accent:'Be there, even when you’re busy.', image:'voice-support', caption:'Thoughtful automation. A human way forward.', benefit:'Give routine questions a clear answer and people a clear handoff.' },
 'workflow-automation': { kind:'automation', title:'Less busywork. More room to move.', accent:'Connect the dots behind your business.', image:'warehouse-operations', caption:'Your systems, working in the same direction.', benefit:'Let the repetitive work take care of itself.' },
 'pos-retail-management': { kind:'retail', title:'A smoother counter. A clearer picture of your store.', accent:'Good retail starts behind the scenes.', image:'retail-inventory', caption:'From the shelf to the sale, stay in control.', benefit:'Make everyday retail easier for the people running it.' },
 'seo-google-business-profile': { kind:'seo', title:'Get found by the people looking for you.', accent:'Search visibility with a clear direction.', image:'search-analytics', caption:'Useful content. Strong foundations. Better visibility.', benefit:'Give the right customers a better route to your business.' },
 'social-media-marketing': { kind:'social', title:'A brand people notice. A story they remember.', accent:'Make every touchpoint feel like you.', image:'marketing-reports', caption:'A considered presence across your channels.', benefit:'Turn scattered posts into a connected brand presence.' },
};
export const technologyBrands = [
 {slug:'stripe',name:'Stripe'},
 {slug:'shopify',name:'Shopify'},
 {slug:'figma',name:'Figma'},
 {slug:'github',name:'GitHub'},
 {slug:'notion',name:'Notion'},
 {slug:'vercel',name:'Vercel'},
 {slug:'cloudflare',name:'Cloudflare'},
 {slug:'gitlab',name:'GitLab'},
 {slug:'docker',name:'Docker'},
 {slug:'mongodb',name:'MongoDB'},
 {slug:'supabase',name:'Supabase'},
 {slug:'netlify',name:'Netlify'},
 {slug:'hubspot',name:'HubSpot'},
 {slug:'dropbox',name:'Dropbox'},
 {slug:'asana',name:'Asana'},
 {slug:'atlassian',name:'Atlassian'},
 {slug:'mailchimp',name:'Mailchimp'},
 {slug:'zoom',name:'Zoom'},
 {slug:'zapier',name:'Zapier'},
 {slug:'linear',name:'Linear'}
];

