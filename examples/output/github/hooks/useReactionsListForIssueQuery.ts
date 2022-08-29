/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReactionsListForIssueQueryPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface UseReactionsListForIssueQueryQueryParams {
	content?: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReactionsListForIssueQueryProps
	extends UseReactionsListForIssueQueryPathParams {
	queryParams: UseReactionsListForIssueQueryQueryParams;
}

/**
 * List the reactions to an [issue](https://docs.github.com/rest/reference/issues).
 */

export function useReactionsListForIssueQuery(props: UseReactionsListForIssueQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['reactions/list-for-issue', owner, repo, issue_number, queryParams]);
}
