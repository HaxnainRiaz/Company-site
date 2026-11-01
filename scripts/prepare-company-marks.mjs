import {writeFile,readFile} from 'node:fs/promises';
const additions=['netlify','hubspot','dropbox','asana','atlassian','mailchimp','zoom','salesforce','zapier','linear'];
for(const slug of additions){const r=await fetch('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/'+slug+'.svg');if(r.ok){await writeFile('public/images/logos/'+slug+'.svg',await r.text());console.log(slug);}else console.log(slug+': unavailable');}
