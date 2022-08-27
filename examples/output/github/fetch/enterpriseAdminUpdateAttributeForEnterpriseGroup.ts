export interface EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody {
	/**
	 * Array of [SCIM operations](https://tools.ietf.org/html/rfc7644#section-3.5.2).
	 */
	Operations: Array<{
		op: 'Add' | 'Remove' | 'Replace' | 'add' | 'remove' | 'replace';
		path?: string;
		value?: string & { '[key: string]'?: any } & Array<{}>;
	}>;
	/**
	 * The SCIM schema URIs.
	 */
	schemas: string[];
}

export interface EnterpriseAdminUpdateAttributeForEnterpriseGroupProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams {
	body: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody;
}

export async function enterpriseAdminUpdateAttributeForEnterpriseGroup(
	props: EnterpriseAdminUpdateAttributeForEnterpriseGroupProps,
) {
	const { enterprise, scim_group_id, body, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Groups/${scim_group_id}`, {
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
