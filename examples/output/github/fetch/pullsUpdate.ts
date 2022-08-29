/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
 */
export async function pullsUpdate(props: PullsUpdateProps) {
	const { owner, repo, pull_number, ...rest } = props;

	return _fetcher<unknown, unknown, PullsUpdateRequestBody>({
		path: `/repos/${owner}/${repo}/pulls/${pull_number}`,
		method: 'PATCH',
		...rest,
	});
}
