import { useQuery } from '@tanstack/react-query';

export interface FindPetsByStatusQueryParams {
	/**
	 * @default "available"
	 */
	status?: 'available' | 'pending' | 'sold';
}

export interface UseFindPetsByStatusQueryProps {
	queryParams: FindPetsByStatusQueryParams;
}

export function useFindPetsByStatusQuery(props: UseFindPetsByStatusQueryProps) {
	const { queryParams } = props;

	return useQuery(['findPetsByStatus', queryParams]);
}
