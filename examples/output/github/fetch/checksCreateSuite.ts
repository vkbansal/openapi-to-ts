export interface ChecksCreateSuitePathParams {
	owner: string;
	repo: string;
}

export interface ChecksCreateSuiteRequestBody {
	/**
	 * The sha of the head commit.
	 */
	head_sha: string;
}

export interface ChecksCreateSuiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksCreateSuitePathParams {
	body: ChecksCreateSuiteRequestBody;
}

export async function checksCreateSuite(props: ChecksCreateSuiteProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-suites`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
