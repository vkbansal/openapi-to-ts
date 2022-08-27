/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EnterpriseAdminListRunnerApplicationsForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListRunnerApplicationsForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListRunnerApplicationsForEnterprisePathParams {}

export async function enterpriseAdminListRunnerApplicationsForEnterprise(
	props: EnterpriseAdminListRunnerApplicationsForEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runners/downloads`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
