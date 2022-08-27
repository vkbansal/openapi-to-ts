import { useQuery } from '@tanstack/react-query';

export interface CodesOfConductGetConductCodePathParams {
	key: string;
}

export interface UseCodesOfConductGetConductCodeQueryProps
	extends CodesOfConductGetConductCodePathParams {}

export function useCodesOfConductGetConductCodeQuery(
	props: UseCodesOfConductGetConductCodeQueryProps,
) {
	const { key } = props;

	return useQuery(['codes-of-conduct/get-conduct-code', key]);
}
