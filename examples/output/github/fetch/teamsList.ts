export interface TeamsListQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListPathParams {
	org: string;
}

export interface TeamsListProps extends Omit<RequestInit, 'method' | 'body'>, TeamsListPathParams {
	queryParams: TeamsListQueryParams;
}

export async function teamsList(props: TeamsListProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams`, {
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
