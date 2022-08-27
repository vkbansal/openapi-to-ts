export interface ReposGetCollaboratorPermissionLevelPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposGetCollaboratorPermissionLevelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCollaboratorPermissionLevelPathParams {}

export async function reposGetCollaboratorPermissionLevel(
	props: ReposGetCollaboratorPermissionLevelProps,
) {
	const { owner, repo, username, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/collaborators/${username}/permission`, {
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
