import { PolicyPageShell } from '@/components/shared/policy-page-shell';
import { accessibilityContent } from '@/content/policies';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({ title: accessibilityContent.title, description: accessibilityContent.introduction, path: '/accessibility' });
export default function PolicyPage() { return <PolicyPageShell document={accessibilityContent} />; }
