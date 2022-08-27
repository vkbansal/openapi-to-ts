export interface PullsMergePathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsMergeRequestBody {
	/**
	 * Extra detail to append to automatic commit message.
	 */
	commit_message?: string;
	/**
	 * Title for the automatic commit message.
	 */
	commit_title?: string;
	/**
	 * Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.
	 */
	merge_method?: 'merge' | 'rebase' | 'squash';
	/**
	 * SHA that pull request head must match to allow merge.
	 */
	sha?: string;
}

export interface PullsMergeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsMergePathParams {
	body: PullsMergeRequestBody;
}

export async function pullsMerge(props: PullsMergeProps) {
	const { owner, repo, pull_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/merge`, {
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
