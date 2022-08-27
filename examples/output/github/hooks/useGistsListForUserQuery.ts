import { useQuery } from '@tanstack/react-query';

export interface GistsListForUserPathParams {
	username: string;
}

export interface GistsListForUserQueryParams {
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

export interface UseGistsListForUserQueryProps extends GistsListForUserPathParams {
	queryParams: GistsListForUserQueryParams;
}

export function useGistsListForUserQuery(props: UseGistsListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['gists/list-for-user', username, queryParams]);
}
