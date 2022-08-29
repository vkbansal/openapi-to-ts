/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReposListCommitStatusesForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposListCommitStatusesForRefQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListCommitStatusesForRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListCommitStatusesForRefPathParams {
	queryParams: ReposListCommitStatusesForRefQueryParams;
}

/**
 * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
 *
 * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
 */
export async function reposListCommitStatusesForRef(props: ReposListCommitStatusesForRefProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${ref}/statuses`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
