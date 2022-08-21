import { useQuery } from '@tanstack/react-query';
export function useFindPetsByStatus() {
	return useQuery(['findPetsByStatus']);
}
