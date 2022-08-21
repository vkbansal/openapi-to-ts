import { useQuery } from '@tanstack/react-query';
export function useGetPetById() {
	return useQuery(['getPetById']);
}
