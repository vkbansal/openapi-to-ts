export interface ReposDeleteInvitationPathParams {
	owner: string;
	repo: string;
	invitation_id: number;
}

export interface ReposDeleteInvitationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteInvitationPathParams {}

export async function reposDeleteInvitation(props: ReposDeleteInvitationProps) {
	const { owner, repo, invitation_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/invitations/${invitation_id}`, {
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
