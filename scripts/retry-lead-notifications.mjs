import { sendLeadNotification } from '../src/server/leads/notifications.js';
import { updateNotificationStatus, getFailedNotifications } from '../src/server/leads/repository.js';

console.log('--- Starting Lead Notification Retry Job ---');

try {
  const failedLeads = await getFailedNotifications();
  console.log(`Found ${failedLeads.length} leads with failed notification status.`);

  let succeeded = 0;
  let stillFailing = 0;

  for (const lead of failedLeads) {
    console.log(`Retrying notification for lead ${lead.id} (${lead.name})...`);
    const result = await sendLeadNotification(lead);

    if (result.success) {
      await updateNotificationStatus(lead.id, 'sent', null);
      console.log(`✓ Lead ${lead.id} notification successfully sent.`);
      succeeded++;
    } else {
      await updateNotificationStatus(lead.id, 'failed', result.error || 'Retry attempt failed');
      console.error(`✗ Lead ${lead.id} notification failed: ${result.error}`);
      stillFailing++;
    }
  }

  console.log(`Retry completed. Succeeded: ${succeeded}, Still Failing: ${stillFailing}`);
} catch (error) {
  console.error('Fatal error during lead retry job:', error);
  process.exit(1);
}
