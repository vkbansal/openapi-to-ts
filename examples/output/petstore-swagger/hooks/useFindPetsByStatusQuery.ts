/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseFindPetsByStatusQueryQueryParams {
	status: Array<'available' | 'pending' | 'sold'>;
}

export interface UseFindPetsByStatusQueryProps {
	queryParams: UseFindPetsByStatusQueryQueryParams;
}

/**
 * Multiple status values can be provided with comma separated strings
 */

export function useFindPetsByStatusQuery(props: UseFindPetsByStatusQueryProps) {
	const { queryParams } = props;

	return useQuery(['findPetsByStatus', queryParams]);
}
