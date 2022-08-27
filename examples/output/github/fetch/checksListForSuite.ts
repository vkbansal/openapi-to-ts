export interface ChecksListForSuiteQueryParams {
	check_name?: string;
	status?: 'completed' | 'in_progress' | 'queued';
	/**
	 * @default "latest"
	 */
	filter?: 'all' | 'latest';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ChecksListForSuitePathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface ChecksListForSuiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksListForSuitePathParams {
	queryParams: ChecksListForSuiteQueryParams;
}

export async function checksListForSuite(props: ChecksListForSuiteProps) {
	const { owner, repo, check_suite_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/check-suites/${check_suite_id}/check-runs`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
