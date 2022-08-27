export interface EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelfHostedRunnersForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams;
}

export async function enterpriseAdminListSelfHostedRunnersForEnterprise(
	props: EnterpriseAdminListSelfHostedRunnersForEnterpriseProps,
) {
	const { enterprise, queryParams, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runners`, {
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
