export interface EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams {}

export async function enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(
	props: EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
