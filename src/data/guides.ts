import { product } from './product';

export interface GuideLink {
	href: string;
	title: string;
	blurb: string;
	group: 'offer' | 'learn';
}

export const guides: readonly GuideLink[] = [
	{
		href: '/ai-agency-engine-pricing/',
		title: 'AI Agency Engine pricing',
		blurb: 'See what the advertised $47 class covers, and which prices sit outside it.',
		group: 'offer',
	},
	{
		href: '/ai-agency-engine-bonuses/',
		title: 'AI Agency Engine bonuses',
		blurb: 'Separate the free registration from paid extras the pages do not itemize.',
		group: 'offer',
	},
	{
		href: '/ai-agency-engine-upsells/',
		title: 'AI Agency Engine upsells',
		blurb: 'Read the optional ladder before an order bump changes the total.',
		group: 'offer',
	},
	{
		href: '/is-ai-agency-engine-legit/',
		title: 'Is AI Agency Engine legit?',
		blurb: 'What the public offer shows, and which income claims are still examples.',
		group: 'offer',
	},
	{
		href: '/ai-agency-engine-pros-and-cons/',
		title: 'AI Agency Engine pros and cons',
		blurb: 'Decide if a demonstrated local-business service fits the work you will actually do.',
		group: 'offer',
	},
	{
		href: '/ai-agency-engine-masterclass/',
		title: 'The 5-day live masterclass',
		blurb: `Compare the free videos with the ${product.schedule.masterclass} class and the cart window.`,
		group: 'offer',
	},
	{
		href: '/ai-agency-engine-murage-demo/',
		title: 'The Murage demo',
		blurb: 'See the team proposal, the research brief, the held emails, and the morning brief.',
		group: 'offer',
	},
	{
		href: '/ai-agency-engine-alternatives/',
		title: 'AI Agency Engine alternatives',
		blurb: 'Compare structured training, self-study, and another agency program.',
		group: 'learn',
	},
	{
		href: '/ai-agency-engine-vs-ai-automation-agency-hub/',
		title: 'AI Agency Engine vs the Hub',
		blurb: 'What the free community publishes, and what the $47 class publishes.',
		group: 'learn',
	},
	{
		href: '/ai-agency-engine-vs-learning-ai-automation-yourself/',
		title: 'Training vs learning the tools',
		blurb: 'How a live class differs from official Make, Zapier, and n8n courses.',
		group: 'learn',
	},
	{
		href: '/ai-agency-engine-for-beginners/',
		title: 'AI Agency Engine for beginners',
		blurb: 'What a beginner can see in the demos, and what the class does not promise.',
		group: 'learn',
	},
	{
		href: '/how-to-start-an-ai-agency/',
		title: 'How to start an AI agency',
		blurb: 'A practical sequence from one business problem to a small demonstration.',
		group: 'learn',
	},
	{
		href: '/how-to-get-your-first-ai-agency-client/',
		title: 'Get a first AI agency client',
		blurb: 'Research, a small demo, and an outreach note you can adapt.',
		group: 'learn',
	},
	{
		href: '/ai-agency-engine-use-cases/',
		title: 'AI services for local businesses',
		blurb: 'Practical service ideas, with the vendor demos that match them.',
		group: 'learn',
	},
];

export function guidesByHref(hrefs: readonly string[]): GuideLink[] {
	return hrefs.map((href) => {
		const guide = guides.find((item) => item.href === href);
		if (!guide) throw new Error(`Missing guide: ${href}`);
		return guide;
	});
}
