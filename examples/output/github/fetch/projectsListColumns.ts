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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
