import type { Metadata } from 'next';
import { LegalPage } from '@/components/site/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Placeholder terms of service for the CREATOURZZ demonstration project.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="9 November 2026"
      intro="These sample terms describe how this demonstration site is intended to be used and what it deliberately does not do."
      sections={[
        {
          heading: 'What this site is',
          paragraphs: [
            'CREATOURZZ is a portfolio and product demonstration. It presents a travel booking experience end to end, but it is not operated by a licensed tour operator and no part of it constitutes an offer to sell a holiday.',
          ],
        },
        {
          heading: 'Nothing here is a booking',
          paragraphs: [
            'Sending an enquiry through this site does not reserve accommodation, transport or any other service, and does not create a contract.',
          ],
          bullets: [
            'No payment gateway is integrated anywhere on this site.',
            'No card, UPI or bank details are requested, processed or stored.',
            'Enquiries are recorded by the application itself and are not forwarded to any travel company.',
          ],
        },
        {
          heading: 'Content accuracy',
          paragraphs: [
            'Prices, itineraries, hotel categories, inclusions, exclusions and cancellation terms shown across the site are sample content, chosen to be realistic for the purposes of the demonstration. They are not quotations and should not be relied on when planning real travel.',
            'Destination information such as best travel months, permit requirements and visa rules changes regularly. Always verify against an official source before making plans.',
          ],
        },
        {
          heading: 'Reviews and testimonials',
          paragraphs: [
            'The traveller notes shown on the homepage are written for this demonstration and are labelled as such wherever they appear. They are not real customer feedback and the names attached to them are invented.',
          ],
        },
        {
          heading: 'Photography',
          paragraphs: [
            'All photography is openly licensed material from Wikimedia Commons, used under the terms of each image licence. Attribution for every photograph is listed on the Photography Credits page.',
          ],
        },
        {
          heading: 'Liability',
          paragraphs: [
            'The site is provided as-is, without warranty of any kind. Because no goods or services are sold here, no liability for travel outcomes arises from using it.',
          ],
        },
      ]}
    />
  );
}
