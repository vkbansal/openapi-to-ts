/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminSetGithubActionsPermissionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams {}

export async function enterpriseAdminSetGithubActionsPermissionsEnterprise(
	props: EnterpriseAdminSetGithubActionsPermissionsEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
