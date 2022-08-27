export interface ReposRenameBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRenameBranchRequestBody {
	/**
	 * The new name of the branch.
	 */
	new_name: string;
}

export interface ReposRenameBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRenameBranchPathParams {
	body: ReposRenameBranchRequestBody;
}

export async function reposRenameBranch(props: ReposRenameBranchProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/branches/${branch}/rename`, {
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
