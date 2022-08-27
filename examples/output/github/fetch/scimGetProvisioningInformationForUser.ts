export interface ScimGetProvisioningInformationForUserPathParams {
	org: string;
	scim_user_id: string;
}

export interface ScimGetProvisioningInformationForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ScimGetProvisioningInformationForUserPathParams {}

export async function scimGetProvisioningInformationForUser(
	props: ScimGetProvisioningInformationForUserProps,
) {
	const { org, scim_user_id, ...rest } = props;

	const response = await fetch(`/scim/v2/organizations/${org}/Users/${scim_user_id}`, {
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
