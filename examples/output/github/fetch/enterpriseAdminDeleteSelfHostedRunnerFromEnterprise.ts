export interface EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams {
	enterprise: string;
	runner_id: number;
}

export interface EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams {}

export async function enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(
	props: EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseProps,
) {
	const { enterprise, runner_id, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runners/${runner_id}`, {
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
