export interface EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams {
	enterprise: string;
}

export interface EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody {
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

export interface EnterpriseAdminProvisionAndInviteEnterpriseGroupProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams {
	body: EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody;
}

export async function enterpriseAdminProvisionAndInviteEnterpriseGroup(
	props: EnterpriseAdminProvisionAndInviteEnterpriseGroupProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Groups`, {
		method: 'POST',
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
