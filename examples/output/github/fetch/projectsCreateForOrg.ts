export interface ProjectsCreateForOrgPathParams {
	org: string;
}

export interface ProjectsCreateForOrgRequestBody {
	/**
	 * The description of the project.
	 */
	body?: string;
	/**
	 * The name of the project.
	 */
	name: string;
}

export interface ProjectsCreateForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsCreateForOrgPathParams {
	body: ProjectsCreateForOrgRequestBody;
}

export async function projectsCreateForOrg(props: ProjectsCreateForOrgProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/projects`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
