export interface ReposUpdateInvitationPathParams {
	owner: string;
	repo: string;
	invitation_id: number;
}

export interface ReposUpdateInvitationRequestBody {
	/**
	 * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
	 */
	permissions?: 'admin' | 'maintain' | 'read' | 'triage' | 'write';
}

export interface ReposUpdateInvitationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateInvitationPathParams {
	body: ReposUpdateInvitationRequestBody;
}

export async function reposUpdateInvitation(props: ReposUpdateInvitationProps) {
	const { owner, repo, invitation_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/invitations/${invitation_id}`, {
		method: 'PATCH',
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
