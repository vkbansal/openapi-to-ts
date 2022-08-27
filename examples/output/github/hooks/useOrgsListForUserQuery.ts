/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface OrgsListForUserPathParams {
	username: string;
}

export interface OrgsListForUserQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseOrgsListForUserQueryProps extends OrgsListForUserPathParams {
	queryParams: OrgsListForUserQueryParams;
}

export function useOrgsListForUserQuery(props: UseOrgsListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['orgs/list-for-user', username, queryParams]);
}