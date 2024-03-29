/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsCreateInvitationPathParams {
	org: string;
}

export interface OrgsCreateInvitationRequestBody {
	/**
	 * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
	 */
	email?: string;
	/**
	 * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
	 */
	invitee_id?: number;
	/**
	 * Specify role for new member. Can be one of:
	 * \* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
	 * \* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
	 * \* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
	 * @default "direct_member"
	 */
	role?: 'admin' | 'billing_manager' | 'direct_member';
	/**
	 * Specify IDs for the teams you want to invite new members to.
	 */
	team_ids?: number[];
}

export interface OrgsCreateInvitationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsCreateInvitationPathParams {
	body: OrgsCreateInvitationRequestBody;
}

/**
 * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
 *
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
 */
export async function orgsCreateInvitation(props: OrgsCreateInvitationProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, OrgsCreateInvitationRequestBody>({
		path: `/orgs/${org}/invitations`,
		method: 'POST',
		...rest,
	});
}
