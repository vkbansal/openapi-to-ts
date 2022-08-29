/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

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

/**
 * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 */
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
