/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user) endpoint instead.
 *
 * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
 *
 * **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
 */
export async function scimSetInformationForProvisionedUser(
	props: ScimSetInformationForProvisionedUserProps,
) {
	const { org, scim_user_id, ...rest } = props;

	return _fetcher<unknown, unknown, ScimSetInformationForProvisionedUserRequestBody>({
		path: `/scim/v2/organizations/${org}/Users/${scim_user_id}`,
		method: 'PUT',
		...rest,
	});
}
