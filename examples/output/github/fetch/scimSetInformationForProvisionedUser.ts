export interface ScimSetInformationForProvisionedUserPathParams {
	org: string;
	scim_user_id: string;
}

export interface ScimSetInformationForProvisionedUserRequestBody {
	active?: boolean;
	/**
	 * The name of the user, suitable for display to end-users
	 * @example "Jon Doe"
	 */
	displayName?: string;
	/**
	 * user emails
	 * @example [{"primary":true,"value":"someone@example.com"},{"primary":false,"value":"another@example.com"}]
	 */
	emails: Array<{
		primary?: boolean;
		type?: string;
		value: string;
	}>;
	externalId?: string;
	groups?: string[];
	/**
	 * @example {"familyName":"User","givenName":"Jane"}
	 */
	name: {
		familyName: string;
		formatted?: string;
		givenName: string;
	};
	schemas?: string[];
	/**
	 * Configured by the admin. Could be an email, login, or username
	 * @example "someone@example.com"
	 */
	userName: string;
}

export interface ScimSetInformationForProvisionedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ScimSetInformationForProvisionedUserPathParams {
	body: ScimSetInformationForProvisionedUserRequestBody;
}

export async function scimSetInformationForProvisionedUser(
	props: ScimSetInformationForProvisionedUserProps,
) {
	const { org, scim_user_id, body, ...rest } = props;

	const response = await fetch(`/scim/v2/organizations/${org}/Users/${scim_user_id}`, {
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
