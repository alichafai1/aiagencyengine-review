import { product } from './product';

export const homepageMeta = {
	title: 'AI Agency Engine Review (2026): Is the $47 Masterclass Worth It?',
	description:
		'AI Agency Engine review: see how Murage turns a local website into a demo and an outreach email, then compare the free preview with the advertised $47 live class.',
};

export const heroIntro = `Local businesses already have websites, inboxes, and follow-up that slips. AI Agency Engine, from ${product.vendor}, shows how to turn that gap into a service: research the business, propose an AI team, and prepare the email. The advertised entry is ${product.advertisedEntryPrice.label} for a five-day live class. The free videos and Murage are a separate way to look first.`;

export interface NamedPoint {
	title: string;
	text: string;
}

export const valueCards: readonly { icon: 'search' | 'assistants' | 'email'; title: string; text: string }[] = [
	{
		icon: 'search',
		title: 'Find the work that is slipping',
		text: 'Start with a real website. Look for missed inquiries, estimates that sit, or follow-up that never goes out.',
	},
	{
		icon: 'assistants',
		title: 'Show a team, not a pile of tools',
		text: 'Murage turns that website into named assistants and waits for approval, so a prospect can see the work.',
	},
	{
		icon: 'email',
		title: 'Leave with an offer they understand',
		text: 'The walkthrough drafts the outreach and a monthly fee. The seller uses $500 to $1,000 a month as the example, not a promised sale.',
	},
];

export interface DemoShot {
	title: string;
	text: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	caption: string;
}

export const murageDemos: readonly DemoShot[] = [
	{
		title: 'A team a prospect can react to',
		text: 'Ember lines up named assistants for a dental question and holds the work until you approve it.',
		src: '/images/vendor/team-proposal.webp',
		alt: 'Ember proposes four assistants for a dental research brief and waits for approval.',
		width: 1920,
		height: 1200,
		caption: 'Vendor demo. The team waits for approval.',
	},
	{
		title: 'A one-page brief you can hand over',
		text: 'The team saves a sourced recommendation. In the dental example, the answer is not an automatic yes.',
		src: '/images/vendor/research-onepager.webp',
		alt: 'Saved research note on whether to sell to dental practices.',
		width: 1920,
		height: 1200,
		caption: 'Vendor demo. Sourced example research.',
	},
	{
		title: 'Outreach that stays a draft',
		text: 'The inbox demo writes replies in the owner voice and sends nothing until you say yes.',
		src: '/images/vendor/inbox-drafts.webp',
		alt: 'Inbox drafts held until the owner answers.',
		width: 1920,
		height: 1200,
		caption: 'Vendor demo. The email stays unsent.',
	},
	{
		title: 'A morning brief you switch on',
		text: 'A weekday 7:00 a.m. brief stays pending until you click Confirm. That is a routine, not a surprise send.',
		src: '/images/vendor/routine-morning-brief.webp',
		alt: 'Confirmation prompt for a weekday 7:00 a.m. morning brief.',
		width: 1920,
		height: 1200,
		caption: 'Vendor demo. Confirm before it runs.',
	},
];

export const freePreview: readonly string[] = [
	`${product.schedule.previewVideos[0].date}: a dentist website becomes an AI front desk and a sales email.`,
	`${product.schedule.previewVideos[1].date}: the path from that demo to a monthly bill.`,
	`${product.schedule.previewVideos[2].date}: a preview of the Early Bird room.`,
	'Murage on your computer. Setup is described as about three minutes.',
	`${product.schedule.earlySession}, ${product.schedule.earlySessionTime}: Early Bird seat, one code reading, and a $500 drawing for one person.`,
];

export const paidFacts: readonly string[] = [
	`Cart opens ${product.schedule.cartOpens}, ${product.schedule.cartOpensTime}, and closes ${product.schedule.cartCloses}, ${product.schedule.cartClosesTime}.`,
	`Live class ${product.schedule.masterclass}, weekdays at ${product.schedule.masterclassTime}.`,
	'Confirm the lesson list and refund terms at checkout.',
];

export const roofingSteps = [
	{
		index: '01',
		title: 'Read the website',
		icon: 'search' as const,
		text: 'Roof repair, replacement, and storm damage across four offices, with inspection requests through a form.',
	},
	{
		index: '02',
		title: 'Name the gaps',
		icon: 'building' as const,
		text: 'Storm inquiries go unanswered, estimates sit for weeks, and review requests are uneven.',
	},
	{
		index: '03',
		title: 'Show a team for that work',
		icon: 'assistants' as const,
		text: 'Storm Responder, Estimate Chaser, and Job Updater appear for that example business.',
	},
	{
		index: '04',
		title: 'Price the illustration',
		icon: 'email' as const,
		text: 'The page labels a $1,000 monthly fee and says one extra roof job covers nine months. It calls the run a simulation.',
	},
];

export const advantages: readonly NamedPoint[] = [
	{
		title: 'You can see the service',
		text: 'A website becomes a team proposal, a research page, held emails, and a schedule you confirm.',
	},
	{
		title: 'The class has a date',
		text: `Five live weekdays, ${product.schedule.masterclass}, at ${product.schedule.masterclassTime}.`,
	},
	{
		title: 'The entry price is specific',
		text: `${product.advertisedEntryPrice.label}, with the cart scheduled from ${product.schedule.cartOpens} to ${product.schedule.cartCloses}.`,
	},
];

export const limitations: readonly NamedPoint[] = [
	{
		title: 'You still find the client',
		text: 'The class does not hand you a business. You make the offer and deliver the work.',
	},
	{
		title: 'Example fees are examples',
		text: '$500 to $1,000 a month is an illustration from the seller, not a promised result.',
	},
	{
		title: 'Checkout still matters',
		text: 'The lesson list, refund terms, and any tool costs are on the checkout, not on these pages.',
	},
];

export const audiences: readonly { index: string; title: string; text: string }[] = [
	{
		index: '01',
		title: 'Beginners who want one path',
		text: 'You want a sequence from a local website to a demo and an email, without starting from code.',
	},
	{
		index: '02',
		title: 'Freelancers and consultants',
		text: 'You already talk with businesses and want AI-assisted work packaged as a service they can understand.',
	},
	{
		index: '03',
		title: 'Agencies with clients now',
		text: 'You sell design, SEO, ads, or IT and want to judge an AI-install offer beside work you already deliver.',
	},
];
