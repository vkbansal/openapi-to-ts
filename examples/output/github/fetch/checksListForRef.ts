export interface ChecksListForRefQueryParams {
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
	app_id?: number;
}

export interface ChecksListForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ChecksListForRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksListForRefPathParams {
	queryParams: ChecksListForRefQueryParams;
}

export async function checksListForRef(props: ChecksListForRefProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${ref}/check-runs`, {
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
