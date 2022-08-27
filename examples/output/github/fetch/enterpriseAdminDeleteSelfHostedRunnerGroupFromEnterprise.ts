export interface EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams {}

export async function enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(
	props: EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseProps,
) {
	const { enterprise, runner_group_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}`,
		{
			method: 'DELETE',
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
