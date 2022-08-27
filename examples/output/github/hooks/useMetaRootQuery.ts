import { useQuery } from '@tanstack/react-query';
export interface UseMetaRootQueryProps {}

export function useMetaRootQuery(props: UseMetaRootQueryProps) {
	const {} = props;

	return useQuery(['meta/root']);
}
