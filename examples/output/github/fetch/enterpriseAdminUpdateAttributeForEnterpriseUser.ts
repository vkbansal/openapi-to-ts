export interface EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody {
	/**
	 * Array of [SCIM operations](https://tools.ietf.org/html/rfc7644#section-3.5.2).
	 */
	Operations: Array<{ '[key: string]'?: any }>;
	/**
	 * The SCIM schema URIs.
	 */
	schemas: string[];
}

export interface EnterpriseAdminUpdateAttributeForEnterpriseUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams {
	body: EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody;
}

export async function enterpriseAdminUpdateAttributeForEnterpriseUser(
	props: EnterpriseAdminUpdateAttributeForEnterpriseUserProps,
) {
	const { enterprise, scim_user_id, body, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Users/${scim_user_id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
