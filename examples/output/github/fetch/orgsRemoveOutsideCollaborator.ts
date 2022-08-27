export interface OrgsRemoveOutsideCollaboratorPathParams {
	org: string;
	username: string;
}

export interface OrgsRemoveOutsideCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsRemoveOutsideCollaboratorPathParams {}

export async function orgsRemoveOutsideCollaborator(props: OrgsRemoveOutsideCollaboratorProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/outside_collaborators/${username}`, {
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
