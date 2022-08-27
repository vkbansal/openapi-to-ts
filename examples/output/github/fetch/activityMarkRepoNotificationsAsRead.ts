/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActivityMarkRepoNotificationsAsReadPathParams {
	owner: string;
	repo: string;
}

export interface ActivityMarkRepoNotificationsAsReadProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityMarkRepoNotificationsAsReadPathParams {}

export async function activityMarkRepoNotificationsAsRead(
	props: ActivityMarkRepoNotificationsAsReadProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/notifications`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}