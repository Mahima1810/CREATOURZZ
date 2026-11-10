import type { Metadata } from 'next';
import { LegalPage } from '@/components/site/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Placeholder privacy policy for the CREATOURZZ demonstration project, including what the enquiry form stores.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="9 November 2026"
      intro="This sample policy describes, accurately, what the demonstration application does with the information you type into it."
      sections={[
        {
          heading: 'What the enquiry form collects',
          paragraphs: ['When you submit an enquiry, the application receives the fields you filled in:'],
          bullets: [
            'Your name, email address and phone number.',
            'Number of travellers and your preferred travel date.',
            'The package you were viewing, if you started from a package page.',
            'Anything you typed into the additional requirements box.',
          ],
        },
        {
          heading: 'Where it goes',
          paragraphs: [
            'The submission is sent to this application’s own API route and appended to a JSON file on the server that is running it — by default, a .data/enquiries.json file in the project directory. On a local run, that means the file stays on your own machine.',
            'A copy of the same details is also written to your browser’s sessionStorage so the confirmation page can display them back to you. That copy is discarded when you close the tab.',
          ],
        },
        {
          heading: 'Where it does not go',
          paragraphs: ['In this build there is no integration that would send your details anywhere else.'],
          bullets: [
            'No email, SMS or push notification is sent to anyone.',
            'No CRM, spreadsheet or third-party service receives the enquiry.',
            'No analytics, advertising or session-recording script runs on this site.',
            'No cookies are set by the application.',
          ],
        },
        {
          heading: 'A caution about real data',
          paragraphs: [
            'Because the demo store is an unencrypted file with no access control around it, you should treat anything you enter as non-private. Please use placeholder details rather than real personal information when trying the enquiry flow.',
          ],
        },
        {
          heading: 'Deleting what you submitted',
          paragraphs: [
            'Delete the .data/enquiries.json file in the project directory to remove every stored enquiry. Closing the browser tab clears the sessionStorage copy.',
          ],
        },
        {
          heading: 'If this were a production deployment',
          paragraphs: [
            'A real version of this product would need a lawful basis for processing, a retention period, a data processing agreement with whichever CRM or email provider received the enquiry, and a working route for access and deletion requests. The README describes where that integration would be added.',
          ],
        },
      ]}
    />
  );
}
