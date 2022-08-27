export interface EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
}

export async function enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(
	props: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseProps,
) {
	const { enterprise, queryParams, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runner-groups`, {
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
