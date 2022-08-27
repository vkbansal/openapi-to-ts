export interface ReposAcceptInvitationPathParams {
	invitation_id: number;
}

export interface ReposAcceptInvitationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAcceptInvitationPathParams {}

export async function reposAcceptInvitation(props: ReposAcceptInvitationProps) {
	const { invitation_id, ...rest } = props;

	const response = await fetch(`/user/repository_invitations/${invitation_id}`, {
		method: 'PATCH',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
