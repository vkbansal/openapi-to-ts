/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseScimProvisionAndInviteUserMutationPathParams {
	org: string;
}

export interface UseScimProvisionAndInviteUserMutationRequestBody {
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

export interface UseScimProvisionAndInviteUserMutationProps
	extends UseScimProvisionAndInviteUserMutationPathParams {
	body: UseScimProvisionAndInviteUserMutationRequestBody;
}

/**
 * Provision organization membership for a user, and send an activation email to the email address.
 */

export function useScimProvisionAndInviteUserMutation(
	props: UseScimProvisionAndInviteUserMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
