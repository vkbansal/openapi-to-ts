import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface ReactionsListForIssueQueryParams {
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

export interface UseReactionsListForIssueQueryProps extends ReactionsListForIssuePathParams {
	queryParams: ReactionsListForIssueQueryParams;
}

export function useReactionsListForIssueQuery(props: UseReactionsListForIssueQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['reactions/list-for-issue', owner, repo, issue_number, queryParams]);
}
