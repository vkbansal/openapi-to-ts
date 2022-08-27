export interface OrgsCancelInvitationPathParams {
	org: string;
	invitation_id: number;
}

export interface OrgsCancelInvitationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsCancelInvitationPathParams {}

export async function orgsCancelInvitation(props: OrgsCancelInvitationProps) {
	const { org, invitation_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/invitations/${invitation_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
