export interface ActivityUnstarRepoForAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface ActivityUnstarRepoForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityUnstarRepoForAuthenticatedUserPathParams {}

export async function activityUnstarRepoForAuthenticatedUser(
	props: ActivityUnstarRepoForAuthenticatedUserProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/user/starred/${owner}/${repo}`, {
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
