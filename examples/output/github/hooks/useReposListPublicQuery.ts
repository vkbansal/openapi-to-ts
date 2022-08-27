import { useQuery } from '@tanstack/react-query';

export interface ReposListPublicQueryParams {
	since?: number;
}

export interface UseReposListPublicQueryProps {
	queryParams: ReposListPublicQueryParams;
}

export function useReposListPublicQuery(props: UseReposListPublicQueryProps) {
	const { queryParams } = props;

	return useQuery(['repos/list-public', queryParams]);
}
