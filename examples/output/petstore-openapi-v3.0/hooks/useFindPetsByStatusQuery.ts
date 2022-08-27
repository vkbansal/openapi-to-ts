/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface FindPetsByStatusQueryParams {
	status?: 'available' | 'pending' | 'sold';
}

export interface UseFindPetsByStatusQueryProps {
	queryParams: FindPetsByStatusQueryParams;
}

export function useFindPetsByStatusQuery(props: UseFindPetsByStatusQueryProps) {
	const { queryParams } = props;

	return useQuery(['findPetsByStatus', queryParams]);
}
