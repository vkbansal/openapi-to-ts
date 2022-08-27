export interface ChecksGetSuitePathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface ChecksGetSuiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksGetSuitePathParams {}

export async function checksGetSuite(props: ChecksGetSuiteProps) {
	const { owner, repo, check_suite_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-suites/${check_suite_id}`, {
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
