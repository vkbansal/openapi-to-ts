export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}

export async function enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(
	props: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/runners`,
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
