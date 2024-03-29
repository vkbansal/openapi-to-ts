/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ProjectsGetColumnPathParams {
	column_id: number;
}

export interface ProjectsGetColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsGetColumnPathParams {}

/**
 *
 */
export async function projectsGetColumn(props: ProjectsGetColumnProps) {
	const { column_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/projects/columns/${column_id}`,
		method: 'GET',
		...rest,
	});
}
