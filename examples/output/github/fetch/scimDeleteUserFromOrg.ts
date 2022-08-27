export interface ScimDeleteUserFromOrgPathParams {
	org: string;
	scim_user_id: string;
}

export interface ScimDeleteUserFromOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ScimDeleteUserFromOrgPathParams {}

export async function scimDeleteUserFromOrg(props: ScimDeleteUserFromOrgProps) {
	const { org, scim_user_id, ...rest } = props;

	const response = await fetch(`/scim/v2/organizations/${org}/Users/${scim_user_id}`, {
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
