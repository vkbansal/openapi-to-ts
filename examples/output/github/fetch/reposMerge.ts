export interface ReposMergePathParams {
	owner: string;
	repo: string;
}

export interface ReposMergeRequestBody {
	/**
	 * The name of the base branch that the head will be merged into.
	 */
	base: string;
	/**
	 * Commit message to use for the merge commit. If omitted, a default message will be used.
	 */
	commit_message?: string;
	/**
	 * The head to merge. This can be a branch name or a commit SHA1.
	 */
	head: string;
}

export interface ReposMergeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposMergePathParams {
	body: ReposMergeRequestBody;
}

export async function reposMerge(props: ReposMergeProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/merges`, {
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
