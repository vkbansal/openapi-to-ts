export interface ScimProvisionAndInviteUserPathParams {
	org: string;
}

export interface ScimProvisionAndInviteUserRequestBody {
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

export interface ScimProvisionAndInviteUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ScimProvisionAndInviteUserPathParams {
	body: ScimProvisionAndInviteUserRequestBody;
}

export async function scimProvisionAndInviteUser(props: ScimProvisionAndInviteUserProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/scim/v2/organizations/${org}/Users`, {
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
