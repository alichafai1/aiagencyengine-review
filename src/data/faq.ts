import { product } from './product';

export interface FaqItem {
	question: string;
	answer: string;
}

export const homepageFaqs: readonly FaqItem[] = [
	{
		question: 'What is AI Agency Engine?',
		answer: `${product.vendor}'s training for offering AI-assisted work to local businesses, with a live class on ${product.schedule.masterclass}.`,
	},
	{
		question: 'What does the $47 price cover?',
		answer: `${product.advertisedEntryPrice.label} is the advertised class for this launch, from ${product.schedule.cartOpens} to ${product.schedule.cartCloses}. It does not include the free preview or the upgrades.`,
	},
	{
		question: 'Are the free videos the masterclass?',
		answer:
			`No. The videos and Murage are a free registration. The masterclass is the live class on ${product.schedule.masterclass}.`,
	},
	{
		question: 'Will this guarantee clients or income?',
		answer:
			'No. The seller uses $500 to $1,000 a month per client as an example, not as a result the class owes you.',
	},
];
