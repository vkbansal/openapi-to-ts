/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReactionsDeleteForIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
	reaction_id: number;
}

export interface ReactionsDeleteForIssueProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForIssuePathParams {}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
 *
 * Delete a reaction to an [issue](https://docs.github.com/rest/reference/issues/).
 */
export async function reactionsDeleteForIssue(props: ReactionsDeleteForIssueProps) {
	const { owner, repo, issue_number, reaction_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/issues/${issue_number}/reactions/${reaction_id}`,
		{
			method: 'DELETE',
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
