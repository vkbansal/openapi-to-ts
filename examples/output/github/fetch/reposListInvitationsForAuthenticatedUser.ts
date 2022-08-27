export interface ReposListInvitationsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListInvitationsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ReposListInvitationsForAuthenticatedUserQueryParams;
}

export async function reposListInvitationsForAuthenticatedUser(
	props: ReposListInvitationsForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/repository_invitations`, {
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
