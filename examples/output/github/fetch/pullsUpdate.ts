export interface PullsUpdatePathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsUpdateRequestBody {
	/**
	 * The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
	 */
	base?: string;
	/**
	 * The contents of the pull request.
	 */
	body?: string;
	/**
	 * Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
	 */
	maintainer_can_modify?: boolean;
	/**
	 * State of this Pull Request. Either `open` or `closed`.
	 */
	state?: 'closed' | 'open';
	/**
	 * The title of the pull request.
	 */
	title?: string;
}

export interface PullsUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdatePathParams {
	body: PullsUpdateRequestBody;
}

export async function pullsUpdate(props: PullsUpdateProps) {
	const { owner, repo, pull_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}`, {
		method: 'PATCH',
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
