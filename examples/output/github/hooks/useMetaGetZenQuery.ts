import { useQuery } from '@tanstack/react-query';
export interface UseMetaGetZenQueryProps {}

export function useMetaGetZenQuery(props: UseMetaGetZenQueryProps) {
	const {} = props;

	return useQuery(['meta/get-zen']);
}
