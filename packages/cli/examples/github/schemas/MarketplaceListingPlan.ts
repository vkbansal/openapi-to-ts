/**
 * Marketplace Listing Plan
 */
export interface MarketplaceListingPlan {
	/**
  * @format uri
  * @example
https://api.github.com/marketplace_listing/plans/1313/accounts
  */
	accounts_url: string;
	/**
  * @example
Up to 25 private repositories,11 concurrent builds
  */
	bullets: string[];
	/**
  * @example
A professional-grade CI solution
  */
	description: string;
	/**
  * @example
true
  */
	has_free_trial: boolean;
	/**
  * @example
1313
  */
	id: number;
	/**
  * @example
1099
  */
	monthly_price_in_cents: number;
	/**
  * @example
Pro
  */
	name: string;
	/**
  * @example
3
  */
	number: number;
	/**
  * @example
flat-rate
  */
	price_model: string;
	/**
  * @example
published
  */
	state: string;
	unit_name: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/marketplace_listing/plans/1313
  */
	url: string;
	/**
  * @example
11870
  */
	yearly_price_in_cents: number;
}
