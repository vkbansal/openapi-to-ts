import { MarketplaceListingPlan } from '../schemas/MarketplaceListingPlan';
import { MarketplaceListingPlan } from '../schemas/MarketplaceListingPlan';
/**
 * Marketplace Purchase
 */
export interface MarketplacePurchase {
	id: number;
	login: string;
	marketplace_pending_change?: {
		effective_date?: string;
		id?: number;
		is_installed?: boolean;
		plan?: MarketplaceListingPlan;
		unit_count?: number | null;
	} | null;
	marketplace_purchase: {
		billing_cycle?: string;
		free_trial_ends_on?: string | null;
		is_installed?: boolean;
		next_billing_date?: string | null;
		on_free_trial?: boolean;
		plan?: MarketplaceListingPlan;
		unit_count?: number | null;
		updated_at?: string;
	};
	organization_billing_email?: string;
	type: string;
	url: string;
}
