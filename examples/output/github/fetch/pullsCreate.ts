export interface PullsCreatePathParams {
	owner: string;
	repo: string;
}

export interface PullsCreateRequestBody {
	/**
	 * The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
	 */
	base: string;
	/**
	 * The contents of the pull request.
	 */
	body?: string;
	/**
	 * Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
	 */
	draft?: boolean;
	/**
	 * The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
	 */
	head: string;
	/**
	 * @example 1
	 */
	issue?: number;
	/**
	 * Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
	 */
	maintainer_can_modify?: boolean;
	/**
	 * The title of the new pull request.
	 */
	title?: string;
}

export interface PullsCreateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCreatePathParams {
	body: PullsCreateRequestBody;
}

export async function pullsCreate(props: PullsCreateProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls`, {
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
