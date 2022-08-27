export interface EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminCreateRegistrationTokenForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams {}

export async function enterpriseAdminCreateRegistrationTokenForEnterprise(
	props: EnterpriseAdminCreateRegistrationTokenForEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runners/registration-token`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
