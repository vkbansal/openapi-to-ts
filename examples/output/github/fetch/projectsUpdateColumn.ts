/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ProjectsUpdateColumnPathParams {
	column_id: number;
}

export interface ProjectsUpdateColumnRequestBody {
	/**
	 * Name of the project column
	 * @example "Remaining tasks"
	 */
	name: string;
}

export interface ProjectsUpdateColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsUpdateColumnPathParams {
	body: ProjectsUpdateColumnRequestBody;
}

/**
 *
 */
export async function projectsUpdateColumn(props: ProjectsUpdateColumnProps) {
	const { column_id, ...rest } = props;

	return _fetcher<unknown, unknown, ProjectsUpdateColumnRequestBody>({
		path: `/projects/columns/${column_id}`,
		method: 'PATCH',
		...rest,
	});
}
