export interface EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody {
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

export interface EnterpriseAdminSetInformationForProvisionedEnterpriseUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams {
	body: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody;
}

export async function enterpriseAdminSetInformationForProvisionedEnterpriseUser(
	props: EnterpriseAdminSetInformationForProvisionedEnterpriseUserProps,
) {
	const { enterprise, scim_user_id, body, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Users/${scim_user_id}`, {
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
