export interface IssuesSetLabelsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesSetLabelsRequestBody {
	/**
	 * The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
	 */
	labels?: string[];
}

export interface IssuesSetLabelsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesSetLabelsPathParams {
	body: IssuesSetLabelsRequestBody;
}

export async function issuesSetLabels(props: IssuesSetLabelsProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/labels`, {
		method: 'PUT',
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
