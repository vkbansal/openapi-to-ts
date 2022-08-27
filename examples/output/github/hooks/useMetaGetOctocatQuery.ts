import { useQuery } from '@tanstack/react-query';

export interface MetaGetOctocatQueryParams {
	s?: string;
}

export interface UseMetaGetOctocatQueryProps {
	queryParams: MetaGetOctocatQueryParams;
}

export function useMetaGetOctocatQuery(props: UseMetaGetOctocatQueryProps) {
	const { queryParams } = props;

	return useQuery(['meta/get-octocat', queryParams]);
}
