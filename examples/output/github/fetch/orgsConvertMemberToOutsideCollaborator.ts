export interface OrgsConvertMemberToOutsideCollaboratorPathParams {
	org: string;
	username: string;
}

export interface OrgsConvertMemberToOutsideCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsConvertMemberToOutsideCollaboratorPathParams {}

export async function orgsConvertMemberToOutsideCollaborator(
	props: OrgsConvertMemberToOutsideCollaboratorProps,
) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/outside_collaborators/${username}`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
