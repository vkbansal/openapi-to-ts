export interface ActivityStarRepoForAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface ActivityStarRepoForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityStarRepoForAuthenticatedUserPathParams {}

export async function activityStarRepoForAuthenticatedUser(
	props: ActivityStarRepoForAuthenticatedUserProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/user/starred/${owner}/${repo}`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
