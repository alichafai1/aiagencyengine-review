/**
 * Source of truth for The AI Agency Engine.
 * Advertised prices and dates can change. Recheck the official pages before relying on them.
 * This origin is configured for pre-deployment checks. Affiliate-term approval is not confirmed.
 * Do not deploy until that approval is in hand.
 */

export const productionOrigin = 'https://aiagencyengine.info';

export const product = {
	name: 'The AI Agency Engine',
	vendor: 'Sean Donahoe',
	officialWebsite: 'https://aiagencyengine.io/',
	affiliateInfoUrl: 'https://aiagencyengine.io/jv',
	reviewedOn: 'October 21, 2026',
	advertisedEntryPrice: {
		amount: 47,
		currency: 'USD',
		label: '$47',
		qualifier: 'Advertised front-end price. The free preview is separate, and optional upgrades are not included.',
	},
	advertisedCommission: {
		label: '50%',
		note: 'subject to the official affiliate terms',
	},
	schedule: {
		cartOpens: 'November 3, 2026',
		cartOpensTime: '11:00 a.m. Eastern',
		cartOpensDetail: '11:00 a.m. Eastern Time on the official affiliate page',
		cartCloses: 'November 8, 2026',
		cartClosesTime: '11:59 p.m. Eastern',
		cartClosesDetail: '11:59 p.m. Eastern Time on the official affiliate page',
		masterclass: 'November 9–13, 2026',
		masterclassDays: 'Monday through Friday',
		masterclassTime: '11:00 a.m. Eastern',
		masterclassDetail:
			'Advertised as a live class, Monday through Friday, at 11:00 a.m. Eastern Time',
		earlySession: 'November 3, 2026',
		earlySessionTime: '10:00 a.m. Eastern',
		earlySessionDetail: '10:00 a.m. Eastern Time, advertised as one hour before the public cart time',
		previewTime: '9:00 a.m. Eastern',
		previewVideos: [
			{ date: 'October 29, 2026', name: 'The Demo Machine' },
			{ date: 'October 31, 2026', name: 'The Money Path' },
			{ date: 'November 1, 2026', name: 'Tuesday at 10' },
		],
		prelaunchVideos: 'October 29, October 31, and November 1, 2026',
		intensiveDate: 'November 18, 2026',
		intensiveWeekday: 'Wednesday',
	},
	deliverySummary:
		'A live class is advertised for November 9–13, 2026. The public site also advertises a free pre-launch video series. The pages reviewed do not itemize which of those pieces are included in the $47 payment.',
	schemaDescription:
		'Training from Sean Donahoe for offering AI-assisted services to local businesses. Public pages show a free preview with Murage, a $47 front end, and a live class scheduled for November 9–13, 2026. Optional upgrades are priced separately.',
} as const;

/**
 * Approved tracking URL. Leave null until a real affiliate hop is supplied.
 * Do not put the JV recruitment page here. That page is not a customer checkout.
 */
export const affiliateUrl: string | null = 'https://jvz9.com/c/3639697/456059/';

export type OfferState =
	| {
			available: true;
			href: string;
	  }
	| {
			available: false;
	  };

export function getOfferState(): OfferState {
	if (affiliateUrl) {
		return {
			available: true,
			href: affiliateUrl,
		};
	}

	return { available: false };
}

export function isAffiliateHref(href: string): boolean {
	return Boolean(affiliateUrl) && href === affiliateUrl;
}

export interface AdvertisedOffer {
	name: string;
	priceLabel: string;
	role: string;
	note: string;
	entry?: boolean;
}

export const advertisedOffers: readonly AdvertisedOffer[] = [
	{
		name: product.name,
		priceLabel: product.advertisedEntryPrice.label,
		role: 'Front end',
		entry: true,
		note: `Paid class for this launch. Cart opens ${product.schedule.cartOpens} at ${product.schedule.cartOpensTime}.`,
	},
	{
		name: 'The Demo Machine + 25 Money Maps',
		priceLabel: '$37',
		role: 'Order bump',
		note: 'Optional. The file list is not published, and this is not the free video of the same name.',
	},
	{
		name: 'Red Carpet',
		priceLabel: '$97',
		role: 'First upsell',
		note: 'Optional. Contents are not published on the public pages.',
	},
	{
		name: 'The Client Machine',
		priceLabel: '$197',
		role: 'Second upsell',
		note: 'Optional. Contents are not published on the public pages.',
	},
	{
		name: 'The First Client Intensive',
		priceLabel: '$497',
		role: 'Separate live day',
		note: `Optional. One live day with Sean on ${product.schedule.intensiveWeekday}, ${product.schedule.intensiveDate}.`,
	},
	{
		name: 'The Complete Package',
		priceLabel: '$497',
		role: 'Early Bird only',
		note: `Sold only in the ${product.schedule.earlySession} session at ${product.schedule.earlySessionTime}.`,
	},
];

export const offerSourceNote =
	'The $47 row is the class. Every other row is optional and is not included.';

export const launchReviewNote = `Prices and dates were checked on ${product.reviewedOn}. Recheck them after ${product.schedule.cartCloses}, when the advertised cart closes. They belong to this launch.`;
