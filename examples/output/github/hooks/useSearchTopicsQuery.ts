import { useQuery } from '@tanstack/react-query';

export interface SearchTopicsQueryParams {
	q: string;
}

export interface UseSearchTopicsQueryProps {
	queryParams: SearchTopicsQueryParams;
}

export function useSearchTopicsQuery(props: UseSearchTopicsQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/topics', queryParams]);
}
