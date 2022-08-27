export interface ActivityCheckRepoIsStarredByAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface ActivityCheckRepoIsStarredByAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityCheckRepoIsStarredByAuthenticatedUserPathParams {}

export async function activityCheckRepoIsStarredByAuthenticatedUser(
	props: ActivityCheckRepoIsStarredByAuthenticatedUserProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/user/starred/${owner}/${repo}`, {
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
