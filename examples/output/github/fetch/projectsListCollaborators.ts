export interface ProjectsListCollaboratorsQueryParams {
	/**
	 * @default "all"
	 */
	affiliation?: 'all' | 'direct' | 'outside';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ProjectsListCollaboratorsPathParams {
	project_id: number;
}

export interface ProjectsListCollaboratorsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListCollaboratorsPathParams {
	queryParams: ProjectsListCollaboratorsQueryParams;
}

export async function projectsListCollaborators(props: ProjectsListCollaboratorsProps) {
	const { project_id, queryParams, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/collaborators`, {
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
