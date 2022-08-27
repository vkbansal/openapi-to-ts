export interface IssuesAddLabelsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesAddLabelsRequestBody {
	/**
	 * The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
	 */
	labels: string[];
}

export interface IssuesAddLabelsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesAddLabelsPathParams {
	body: IssuesAddLabelsRequestBody;
}

export async function issuesAddLabels(props: IssuesAddLabelsProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/labels`, {
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
