export interface ReactionsDeleteForIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
	reaction_id: number;
}

export interface ReactionsDeleteForIssueProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForIssuePathParams {}

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
