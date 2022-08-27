/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ProjectsListCollaboratorsQueryParams {
	affiliation?: 'all' | 'direct' | 'outside';
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
