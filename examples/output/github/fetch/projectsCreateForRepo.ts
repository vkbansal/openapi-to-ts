export interface ProjectsCreateForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ProjectsCreateForRepoRequestBody {
	/**
	 * The description of the project.
	 */
	body?: string;
	/**
	 * The name of the project.
	 */
	name: string;
}

export interface ProjectsCreateForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsCreateForRepoPathParams {
	body: ProjectsCreateForRepoRequestBody;
}

export async function projectsCreateForRepo(props: ProjectsCreateForRepoProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/projects`, {
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
