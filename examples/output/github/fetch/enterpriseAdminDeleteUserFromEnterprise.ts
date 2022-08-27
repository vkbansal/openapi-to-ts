export interface EnterpriseAdminDeleteUserFromEnterprisePathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface EnterpriseAdminDeleteUserFromEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminDeleteUserFromEnterprisePathParams {}

export async function enterpriseAdminDeleteUserFromEnterprise(
	props: EnterpriseAdminDeleteUserFromEnterpriseProps,
) {
	const { enterprise, scim_user_id, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Users/${scim_user_id}`, {
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
