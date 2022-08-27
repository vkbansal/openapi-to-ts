export interface EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams {
	enterprise: string;
	runner_id: number;
}

export interface EnterpriseAdminGetSelfHostedRunnerForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams {}

export async function enterpriseAdminGetSelfHostedRunnerForEnterprise(
	props: EnterpriseAdminGetSelfHostedRunnerForEnterpriseProps,
) {
	const { enterprise, runner_id, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runners/${runner_id}`, {
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
