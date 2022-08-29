/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ProjectsListCardsPathParams {
	column_id: number;
}

export interface ProjectsListCardsQueryParams {
	/**
	 * @default "not_archived"
	 */
	archived_state?: 'all' | 'archived' | 'not_archived';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseProjectsListCardsQueryProps extends ProjectsListCardsPathParams {
	queryParams: ProjectsListCardsQueryParams;
}

/**
 *
 */

export function useProjectsListCardsQuery(props: UseProjectsListCardsQueryProps) {
	const { column_id, queryParams } = props;

	return useQuery(['projects/list-cards', column_id, queryParams]);
}
