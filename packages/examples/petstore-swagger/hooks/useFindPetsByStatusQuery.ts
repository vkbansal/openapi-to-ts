import { useQuery } from '@tanstack/react-query';

export interface UseFindPetsByStatusQueryProps {}

export function useFindPetsByStatusQuery(props: UseFindPetsByStatusQueryProps) {
	const {} = props;
	return useQuery(['findPetsByStatus']);
}
