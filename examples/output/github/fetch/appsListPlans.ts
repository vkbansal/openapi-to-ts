export interface AppsListPlansQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListPlansProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListPlansQueryParams;
}

export async function appsListPlans(props: AppsListPlansProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/marketplace_listing/plans`, {
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
