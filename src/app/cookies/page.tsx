import { PolicyPageShell } from '@/components/shared/policy-page-shell';
import { cookiePolicyContent } from '@/content/policies';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({ title: cookiePolicyContent.title, description: cookiePolicyContent.introduction, path: '/cookies' });
export default function PolicyPage() { return <PolicyPageShell document={cookiePolicyContent} />; }
