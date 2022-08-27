import { useQuery } from '@tanstack/react-query';
export interface UseMetaGetQueryProps {}

export function useMetaGetQuery(props: UseMetaGetQueryProps) {
	const {} = props;

	return useQuery(['meta/get']);
}
