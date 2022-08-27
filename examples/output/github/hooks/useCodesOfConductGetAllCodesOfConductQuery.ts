import { useQuery } from '@tanstack/react-query';
export interface UseCodesOfConductGetAllCodesOfConductQueryProps {}

export function useCodesOfConductGetAllCodesOfConductQuery(
	props: UseCodesOfConductGetAllCodesOfConductQueryProps,
) {
	const {} = props;

	return useQuery(['codes-of-conduct/get-all-codes-of-conduct']);
}
