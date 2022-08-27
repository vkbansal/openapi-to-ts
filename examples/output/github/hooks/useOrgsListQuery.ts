import { useQuery } from '@tanstack/react-query';

export interface OrgsListQueryParams {
	since?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface UseOrgsListQueryProps {
	queryParams: OrgsListQueryParams;
}

export function useOrgsListQuery(props: UseOrgsListQueryProps) {
	const { queryParams } = props;

	return useQuery(['orgs/list', queryParams]);
}
