export interface AppsListAccountsForPlanStubbedQueryParams {
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

export interface AppsListAccountsForPlanStubbedPathParams {
	plan_id: number;
}

export interface AppsListAccountsForPlanStubbedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsListAccountsForPlanStubbedPathParams {
	queryParams: AppsListAccountsForPlanStubbedQueryParams;
}

export async function appsListAccountsForPlanStubbed(props: AppsListAccountsForPlanStubbedProps) {
	const { plan_id, queryParams, ...rest } = props;

	const response = await fetch(`/marketplace_listing/stubbed/plans/${plan_id}/accounts`, {
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
