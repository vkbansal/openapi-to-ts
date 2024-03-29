/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ProjectsCreateColumnPathParams {
	project_id: number;
}

export interface ProjectsCreateColumnRequestBody {
	/**
	 * Name of the project column
	 * @example "Remaining tasks"
	 */
	name: string;
}

export interface ProjectsCreateColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsCreateColumnPathParams {
	body: ProjectsCreateColumnRequestBody;
}

/**
 *
 */
export async function projectsCreateColumn(props: ProjectsCreateColumnProps) {
	const { project_id, ...rest } = props;

	return _fetcher<unknown, unknown, ProjectsCreateColumnRequestBody>({
		path: `/projects/${project_id}/columns`,
		method: 'POST',
		...rest,
	});
}
