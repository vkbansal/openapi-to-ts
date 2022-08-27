import { useQuery } from '@tanstack/react-query';

export interface GetPetByIdPathParams {
	/**
	 * @format int64
	 */
	petId: number;
}

export interface UseGetPetByIdQueryProps extends GetPetByIdPathParams {}

export function useGetPetByIdQuery(props: UseGetPetByIdQueryProps) {
	const { petId } = props;

	return useQuery(['getPetById', petId]);
}
