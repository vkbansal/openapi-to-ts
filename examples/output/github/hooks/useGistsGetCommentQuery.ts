/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseGistsGetCommentQueryPathParams {
	gist_id: string;
	comment_id: number;
}

export interface UseGistsGetCommentQueryProps extends UseGistsGetCommentQueryPathParams {}

/**
 *
 */

export function useGistsGetCommentQuery(props: UseGistsGetCommentQueryProps) {
	const { gist_id, comment_id } = props;

	return useQuery(['gists/get-comment', gist_id, comment_id]);
}
