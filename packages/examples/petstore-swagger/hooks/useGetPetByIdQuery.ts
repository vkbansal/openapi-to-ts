import { useQuery } from '@tanstack/react-query';

export interface UseGetPetByIdQueryProps {
	petId: string;
}

export function useGetPetByIdQuery(props: UseGetPetByIdQueryProps) {
	const { petId } = props;
	return useQuery(['getPetById', petId]);
}
