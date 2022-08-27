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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
