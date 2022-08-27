/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface AppsListAccountsForPlanQueryParams {
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}