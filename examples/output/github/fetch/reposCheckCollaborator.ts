export interface ReposCheckCollaboratorPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposCheckCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCheckCollaboratorPathParams {}

export async function reposCheckCollaborator(props: ReposCheckCollaboratorProps) {
	const { owner, repo, username, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/collaborators/${username}`, {
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
