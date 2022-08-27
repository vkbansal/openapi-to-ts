export interface ChecksListSuitesForRefQueryParams {
	app_id?: number;
	check_name?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ChecksListSuitesForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ChecksListSuitesForRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksListSuitesForRefPathParams {
	queryParams: ChecksListSuitesForRefQueryParams;
}

export async function checksListSuitesForRef(props: ChecksListSuitesForRefProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${ref}/check-suites`, {
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
