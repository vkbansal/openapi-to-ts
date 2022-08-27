export interface ChecksListAnnotationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ChecksListAnnotationsPathParams {
	owner: string;
	repo: string;
	check_run_id: number;
}

export interface ChecksListAnnotationsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksListAnnotationsPathParams {
	queryParams: ChecksListAnnotationsQueryParams;
}

export async function checksListAnnotations(props: ChecksListAnnotationsProps) {
	const { owner, repo, check_run_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-runs/${check_run_id}/annotations`, {
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
