/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface AppsListPlansQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
