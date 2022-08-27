export interface ReposListInvitationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListInvitationsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListInvitationsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListInvitationsPathParams {
	queryParams: ReposListInvitationsQueryParams;
}

export async function reposListInvitations(props: ReposListInvitationsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/invitations`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
