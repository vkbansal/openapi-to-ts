/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseIssuesGetCommentQueryPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface UseIssuesGetCommentQueryProps extends UseIssuesGetCommentQueryPathParams {}

/**
 *
 */

export function useIssuesGetCommentQuery(props: UseIssuesGetCommentQueryProps) {
	const { owner, repo, comment_id } = props;

	return useQuery(['issues/get-comment', owner, repo, comment_id]);
}
