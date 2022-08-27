export interface ChecksRerequestSuitePathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface ChecksRerequestSuiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksRerequestSuitePathParams {}

export async function checksRerequestSuite(props: ChecksRerequestSuiteProps) {
	const { owner, repo, check_suite_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-suites/${check_suite_id}/rerequest`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
