/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ProjectsListColumnsQueryParams {
	per_page?: number;
	page?: number;
}

export interface ProjectsListColumnsPathParams {
	project_id: number;
}

export interface ProjectsListColumnsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListColumnsPathParams {
	queryParams: ProjectsListColumnsQueryParams;
}

export async function projectsListColumns(props: ProjectsListColumnsProps) {
	const { project_id, queryParams, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/columns`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
