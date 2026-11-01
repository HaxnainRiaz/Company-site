import { HomeStudio } from '@/components/pages/home/home-studio';
import { createPageMetadata } from '@/lib/metadata';
export const metadata=createPageMetadata({title:'Software, Automation & Digital Growth',description:'Thoughtful websites, connected business tools, and practical automation. Explore our services, studio concepts, and interactive demos.',path:'/'});
export default function HomePage(){return <HomeStudio/>;}
