export interface ChecksGetPathParams {
	owner: string;
	repo: string;
	check_run_id: number;
}

export interface ChecksGetProps extends Omit<RequestInit, 'method' | 'body'>, ChecksGetPathParams {}

export async function checksGet(props: ChecksGetProps) {
	const { owner, repo, check_run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-runs/${check_run_id}`, {
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
