/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface IssuesListForOrgQueryParams {
	filter?: 'all' | 'assigned' | 'created' | 'mentioned' | 'repos' | 'subscribed';
	state?: 'all' | 'closed' | 'open';
	labels?: string;
	sort?: 'comments' | 'created' | 'updated';
	direction?: 'asc' | 'desc';
	since?: string;
	per_page?: number;
	page?: number;
}

export interface IssuesListForOrgPathParams {
	org: string;
}

export interface IssuesListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListForOrgPathParams {
	queryParams: IssuesListForOrgQueryParams;
}

export async function issuesListForOrg(props: IssuesListForOrgProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/issues`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
