/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
