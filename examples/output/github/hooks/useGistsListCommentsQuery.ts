import { useQuery } from '@tanstack/react-query';

export interface GistsListCommentsPathParams {
	gist_id: string;
}

export interface GistsListCommentsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseGistsListCommentsQueryProps extends GistsListCommentsPathParams {
	queryParams: GistsListCommentsQueryParams;
}

export function useGistsListCommentsQuery(props: UseGistsListCommentsQueryProps) {
	const { gist_id, queryParams } = props;

	return useQuery(['gists/list-comments', gist_id, queryParams]);
}
