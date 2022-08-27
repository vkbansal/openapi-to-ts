/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
	runner_id: number;
}

export interface EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams {}

export async function enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(
	props: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, runner_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/runners/${runner_id}`,
		{
			method: 'DELETE',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}