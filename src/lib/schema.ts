import type { FaqItem } from '../data/faq';
import { product, productionOrigin } from '../data/product';

function trustedOrigin(): string | null {
	const value = productionOrigin.trim();
	if (!value) return null;
	try {
		const url = new URL(value);
		if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
		return url.origin;
	} catch {
		return null;
	}
}

export function buildGuideSchema(input: {
	title: string;
	description: string;
	crumbs: readonly { name: string; path: string }[];
	faqs?: readonly FaqItem[];
	aboutProduct?: boolean;
}) {
	const origin = trustedOrigin();
	const graph: object[] = [
		{
			'@type': 'WebPage',
			name: input.title,
			description: input.description,
			inLanguage: 'en',
			...(input.aboutProduct === false
				? {}
				: {
						about: {
							'@type': 'Thing',
							name: product.name,
						},
					}),
		},
		{
			'@type': 'BreadcrumbList',
			itemListElement: input.crumbs.map((crumb, index) => {
				const entry: Record<string, unknown> = {
					'@type': 'ListItem',
					position: index + 1,
					name: crumb.name,
				};
				if (origin) entry.item = new URL(crumb.path, origin).href;
				return entry;
			}),
		},
	];

	if (input.faqs && input.faqs.length > 0) {
		graph.push({
			'@type': 'FAQPage',
			mainEntity: input.faqs.map((item) => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: item.answer,
				},
			})),
		});
	}

	return {
		'@context': 'https://schema.org',
		'@graph': graph,
	};
}

export function buildHomepageSchema(input: { title: string; description: string; faqs: readonly FaqItem[] }) {

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				name: input.title,
				description: input.description,
				inLanguage: 'en',
				about: {
					'@type': 'Thing',
					name: product.name,
					url: product.officialWebsite,
				},
			},
			{
				'@type': 'Product',
				name: product.name,
				description: product.schemaDescription,
				url: product.officialWebsite,
				brand: {
					'@type': 'Brand',
					name: product.vendor,
				},
				offers: {
					'@type': 'Offer',
					price: String(product.advertisedEntryPrice.amount),
					priceCurrency: product.advertisedEntryPrice.currency,
					url: product.officialWebsite,
					description: `${product.advertisedEntryPrice.label} advertised front end. Cart opens ${product.schedule.cartOpens}. The free preview is a separate registration, and optional upgrades are not included.`,
				},
			},
			{
				'@type': 'FAQPage',
				mainEntity: input.faqs.map((item) => ({
					'@type': 'Question',
					name: item.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: item.answer,
					},
				})),
			},
		],
	};
}
