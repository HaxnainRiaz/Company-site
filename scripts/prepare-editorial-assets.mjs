import sharp from 'sharp';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
const sources = [
['web-development',16129705,'https://www.pexels.com/photo/man-sitting-at-desk-working-on-computers-16129705/'],
['search-analytics',3861957,'https://www.pexels.com/photo/graph-on-laptop-screen-3861957/'],
['voice-support',8867202,'https://www.pexels.com/photo/a-person-holding-a-headset-8867202/'],
['mobile-product',36136699,'https://www.pexels.com/photo/smartphone-on-dark-surface-with-app-screen-36136699/'],
['commerce-lifestyle',5868267,'https://www.pexels.com/photo/a-woman-holding-shopping-bags-5868267/'],
['retail-inventory',4481528,'https://www.pexels.com/photo/men-working-in-a-warehouse-4481528/'],
['team-strategy',39219944,'https://www.pexels.com/photo/diverse-team-analyzing-data-on-laptop-in-modern-office-39219944/'],
['marketing-reports',7108091,'https://www.pexels.com/photo/gray-laptop-on-the-table-7108091/'],
['portrait-woman',10041258,'https://www.pexels.com/photo/portrait-of-businesswoman-10041258/'],
['portrait-man',29856511,'https://www.pexels.com/photo/professional-portrait-of-a-smiling-man-in-business-attire-29856511/'],
['project-discovery',5313151,'https://www.pexels.com/photo/a-woman-in-blue-long-sleeves-standing-beside-a-man-5313151/'],
['coffee-ritual',4906251,'https://www.pexels.com/photo/ornamental-cup-near-kettle-in-modern-cafeteria-4906251/'],
['coffee-equipment',16027332,'https://www.pexels.com/photo/coffee-brewing-on-cup-set-on-ceramic-counter-next-to-kettle-16027332/'],
['ceramic-coffee',4409268,'https://www.pexels.com/photo/beautiful-cup-of-coffee-drink-and-glass-kettle-placed-on-black-table-4409268/'],
['pour-over',7937497,'https://www.pexels.com/photo/white-ceramic-cup-on-top-of-clear-glass-kettle-7937497/'],
['remote-workspace',7013068,'https://www.pexels.com/photo/person-using-black-laptop-7013068/'],
['engineering-workspace',6804613,'https://www.pexels.com/photo/workstation-computer-monitor-with-html-editor-6804613/'],
['retail-experience',36730638,'https://www.pexels.com/photo/smiling-woman-shopping-with-bags-in-boutique-36730638/'],
['warehouse-operations',29454379,'https://www.pexels.com/photo/expansive-warehouse-aisle-filled-with-products-29454379/'],
['support-specialist',7682346,'https://www.pexels.com/photo/selective-focus-photo-of-a-woman-wearing-a-black-headset-7682346/'],
];
await mkdir('public/images/editorial',{recursive:true});
await mkdir('public/images/logos',{recursive:true});
const register=[];
await Promise.all(sources.filter(([name]) => name !== 'remote-workspace').map(async ([name,id,page])=>{
 const out='public/images/editorial/'+name+'.webp';
 try {
 let data;
 try { data=await readFile(out); } catch {
  const response=await fetch('https://images.pexels.com/photos/'+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w=1400');
  if(!response.ok)throw Error('HTTP '+response.status);
  data=await sharp(Buffer.from(await response.arrayBuffer())).rotate().resize({width:name.startsWith('portrait')?480:1400,withoutEnlargement:true}).webp({quality:82}).toBuffer();
  await writeFile(out,data);
 }
 const meta=await sharp(data).metadata();
 register.push({file:out,source:page,license:'https://www.pexels.com/license/',accessed:'2026-10-28',width:meta.width,height:meta.height,bytes:data.length,role:'Contextual stock imagery; never represented as verified staff, clients, or owned software.'});
 console.log('Photo: '+name);
 } catch(error) { console.error(name+': '+error.message); process.exitCode=1; }
}));
const logos=['stripe','shopify','woocommerce','wordpress','figma','github','react','nextdotjs','nodedotjs','typescript','tailwindcss','vercel','docker','python','postgresql','mongodb','cloudflare','notion','supabase','gitlab'];
await Promise.all(logos.map(async slug=>{
 const response=await fetch('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/'+slug+'.svg');
 if(!response.ok){console.error('Logo '+slug+': '+response.status);process.exitCode=1;return;}
 await writeFile('public/images/logos/'+slug+'.svg',await response.text());
}));
await writeFile('docs/editorial-assets.json',JSON.stringify(register,null,2));
console.log('Prepared '+register.length+' editorial photos and '+logos.length+' technology brand marks.');

