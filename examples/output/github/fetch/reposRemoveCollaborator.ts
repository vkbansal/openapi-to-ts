export interface ReposRemoveCollaboratorPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposRemoveCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveCollaboratorPathParams {}

export async function reposRemoveCollaborator(props: ReposRemoveCollaboratorProps) {
	const { owner, repo, username, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/collaborators/${username}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
