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

export async function orgsCreateInvitation(props: OrgsCreateInvitationProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/invitations`, {
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
