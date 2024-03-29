/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ProjectsListColumnsPathParams {
	project_id: number;
}

export interface ProjectsListColumnsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ProjectsListColumnsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListColumnsPathParams {
	queryParams: ProjectsListColumnsQueryParams;
	paramsSerializer?: (params: ProjectsListColumnsQueryParams) => string;
}

/**
 *
 */
export async function projectsListColumns(props: ProjectsListColumnsProps) {
	const { project_id, ...rest } = props;

	return _fetcher<unknown, ProjectsListColumnsQueryParams, unknown>({
		path: `/projects/${project_id}/columns`,
		method: 'GET',
		...rest,
	});
}
