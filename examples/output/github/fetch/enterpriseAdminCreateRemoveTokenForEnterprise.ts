export interface EnterpriseAdminCreateRemoveTokenForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminCreateRemoveTokenForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminCreateRemoveTokenForEnterprisePathParams {}

export async function enterpriseAdminCreateRemoveTokenForEnterprise(
	props: EnterpriseAdminCreateRemoveTokenForEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/runners/remove-token`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
