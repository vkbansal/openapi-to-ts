export interface AppsListPlansStubbedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListPlansStubbedProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListPlansStubbedQueryParams;
}

export async function appsListPlansStubbed(props: AppsListPlansStubbedProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/marketplace_listing/stubbed/plans`, {
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
