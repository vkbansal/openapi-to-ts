import { useQuery } from '@tanstack/react-query';

export interface OrgsListForUserPathParams {
	username: string;
}

export interface OrgsListForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListForUserQueryProps extends OrgsListForUserPathParams {
	queryParams: OrgsListForUserQueryParams;
}

export function useOrgsListForUserQuery(props: UseOrgsListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['orgs/list-for-user', username, queryParams]);
}
