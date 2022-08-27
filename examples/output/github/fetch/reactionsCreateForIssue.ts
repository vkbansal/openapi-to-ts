export interface ReactionsCreateForIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface ReactionsCreateForIssueRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForIssueProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForIssuePathParams {
	body: ReactionsCreateForIssueRequestBody;
}

export async function reactionsCreateForIssue(props: ReactionsCreateForIssueProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/reactions`, {
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
