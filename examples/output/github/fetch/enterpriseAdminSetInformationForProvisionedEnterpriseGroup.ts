export interface EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody {
	/**
	 * The name of the SCIM group. This must match the GitHub organization that the group maps to.
	 */
	displayName: string;
	members?: Array<{
		/**
		 * The SCIM user ID for a user.
		 */
		value: string;
	}>;
	/**
	 * The SCIM schema URIs.
	 */
	schemas: string[];
}

export interface EnterpriseAdminSetInformationForProvisionedEnterpriseGroupProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams {
	body: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody;
}

export async function enterpriseAdminSetInformationForProvisionedEnterpriseGroup(
	props: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupProps,
) {
	const { enterprise, scim_group_id, body, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Groups/${scim_group_id}`, {
		method: 'PUT',
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
