export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	queryParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams;
}

export async function enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(
	props: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseProps,
) {
	const { enterprise, runner_group_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/organizations`,
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
