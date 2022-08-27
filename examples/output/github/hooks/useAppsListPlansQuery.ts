import { useQuery } from '@tanstack/react-query';

export interface AppsListPlansQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListPlansQueryProps {
	queryParams: AppsListPlansQueryParams;
}

export function useAppsListPlansQuery(props: UseAppsListPlansQueryProps) {
	const { queryParams } = props;

	return useQuery(['apps/list-plans', queryParams]);
}
