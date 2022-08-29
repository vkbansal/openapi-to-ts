/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface IssuesListForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListForRepoQueryParams {
	milestone?: string;
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	assignee?: string;
	creator?: string;
	mentioned?: string;
	labels?: string;
	/**
	 * @default "created"
	 */
	sort?: 'comments' | 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListForRepoQueryProps extends IssuesListForRepoPathParams {
	queryParams: IssuesListForRepoQueryParams;
}

/**
 * List issues in a repository.
 *
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 */

export function useIssuesListForRepoQuery(props: UseIssuesListForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-for-repo', owner, repo, queryParams]);
}
