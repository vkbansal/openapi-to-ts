/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface GistsListCommentsPathParams {
	gist_id: string;
}

export interface GistsListCommentsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseGistsListCommentsQueryProps extends GistsListCommentsPathParams {
	queryParams: GistsListCommentsQueryParams;
}

export function useGistsListCommentsQuery(props: UseGistsListCommentsQueryProps) {
	const { gist_id, queryParams } = props;

	return useQuery(['gists/list-comments', gist_id, queryParams]);
}
