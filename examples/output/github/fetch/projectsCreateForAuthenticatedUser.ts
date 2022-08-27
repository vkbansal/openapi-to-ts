export interface ProjectsCreateForAuthenticatedUserRequestBody {
	/**
	 * Body of the project
	 * @example "This project represents the sprint of the first week in January"
	 */
	body?: string | null;
	/**
	 * Name of the project
	 * @example "Week One Sprint"
	 */
	name: string;
}

export interface ProjectsCreateForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: ProjectsCreateForAuthenticatedUserRequestBody;
}

export async function projectsCreateForAuthenticatedUser(
	props: ProjectsCreateForAuthenticatedUserProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/projects`, {
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
