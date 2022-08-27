export interface EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams {
	enterprise: string;
}

export interface EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody {
	/**
	 * List of user emails.
	 */
	emails: Array<{
		/**
		 * Whether this email address is the primary address.
		 */
		primary: boolean;
		/**
		 * The type of email address.
		 */
		type: string;
		/**
		 * The email address.
		 */
		value: string;
	}>;
	/**
	 * List of SCIM group IDs the user is a member of.
	 */
	groups?: Array<{
		value?: string;
	}>;
	name: {
		/**
		 * The last name of the user.
		 */
		familyName: string;
		/**
		 * The first name of the user.
		 */
		givenName: string;
	};
	/**
	 * The SCIM schema URIs.
	 */
	schemas: string[];
	/**
	 * The username for the user.
	 */
	userName: string;
}

export interface EnterpriseAdminProvisionAndInviteEnterpriseUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams {
	body: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody;
}

export async function enterpriseAdminProvisionAndInviteEnterpriseUser(
	props: EnterpriseAdminProvisionAndInviteEnterpriseUserProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Users`, {
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
