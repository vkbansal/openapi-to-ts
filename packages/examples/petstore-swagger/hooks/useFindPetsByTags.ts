import { useQuery } from '@tanstack/react-query';
export function useFindPetsByTags() {
	return useQuery(['findPetsByTags']);
}
