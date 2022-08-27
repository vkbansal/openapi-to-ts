import { useQuery } from '@tanstack/react-query';

export interface GistsGetCommentPathParams {
	gist_id: string;
	comment_id: number;
}

export interface UseGistsGetCommentQueryProps extends GistsGetCommentPathParams {}

export function useGistsGetCommentQuery(props: UseGistsGetCommentQueryProps) {
	const { gist_id, comment_id } = props;

	return useQuery(['gists/get-comment', gist_id, comment_id]);
}
