export interface AppsListAccountsForPlanQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListAccountsForPlanPathParams {
	plan_id: number;
}

export interface AppsListAccountsForPlanProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsListAccountsForPlanPathParams {
	queryParams: AppsListAccountsForPlanQueryParams;
}

export async function appsListAccountsForPlan(props: AppsListAccountsForPlanProps) {
	const { plan_id, queryParams, ...rest } = props;

	const response = await fetch(`/marketplace_listing/plans/${plan_id}/accounts`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
