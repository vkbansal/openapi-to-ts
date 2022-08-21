import { MarketplaceAccount } from '../schemas/MarketplaceAccount';
import { MarketplaceListingPlan } from '../schemas/MarketplaceListingPlan';
/**
 * User Marketplace Purchase
 */
export interface UserMarketplacePurchase {
	account: MarketplaceAccount;
	/**
  * @example
monthly
  */
	billing_cycle: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	free_trial_ends_on: string | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	next_billing_date: string | null;
	/**
  * @example
true
  */
	on_free_trial: boolean;
	plan: MarketplaceListingPlan;
	unit_count: number | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string | null;
}
