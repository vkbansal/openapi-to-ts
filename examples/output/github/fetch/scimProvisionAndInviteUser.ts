/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Provision organization membership for a user, and send an activation email to the email address.
 */
export async function scimProvisionAndInviteUser(props: ScimProvisionAndInviteUserProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, ScimProvisionAndInviteUserRequestBody>({
		path: `/scim/v2/organizations/${org}/Users`,
		method: 'POST',
		...rest,
	});
}
