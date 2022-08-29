/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface ProjectsListCardsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListCardsPathParams {
	queryParams: ProjectsListCardsQueryParams;
	paramsSerializer?: (params: ProjectsListCardsQueryParams) => string;
}

/**
 *
 */
export async function projectsListCards(props: ProjectsListCardsProps) {
	const { column_id, ...rest } = props;

	return _fetcher<unknown, ProjectsListCardsQueryParams, unknown>({
		path: `/projects/columns/${column_id}/cards`,
		method: 'GET',
		...rest,
	});
}
