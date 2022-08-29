/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseLoginUserQueryQueryParams {
	username: string;
	password: string;
}

export interface UseLoginUserQueryProps {
	queryParams: UseLoginUserQueryQueryParams;
}

/**
 *
 */

export function useLoginUserQuery(props: UseLoginUserQueryProps) {
	const { queryParams } = props;

	return useQuery(['loginUser', queryParams]);
}
