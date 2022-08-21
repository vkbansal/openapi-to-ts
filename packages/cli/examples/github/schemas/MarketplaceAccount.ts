export interface MarketplaceAccount {
	/**
	 * @format email
	 */
	email?: string | null;
	id: number;
	login: string;
	node_id?: string;
	/**
	 * @format email
	 */
	organization_billing_email?: string | null;
	type: string;
	/**
	 * @format uri
	 */
	url: string;
}
