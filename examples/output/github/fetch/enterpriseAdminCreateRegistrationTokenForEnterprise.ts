/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}