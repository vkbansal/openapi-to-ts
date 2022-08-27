export interface ReposDeclineInvitationPathParams {
	invitation_id: number;
}

export interface ReposDeclineInvitationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeclineInvitationPathParams {}

export async function reposDeclineInvitation(props: ReposDeclineInvitationProps) {
	const { invitation_id, ...rest } = props;

	const response = await fetch(`/user/repository_invitations/${invitation_id}`, {
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
