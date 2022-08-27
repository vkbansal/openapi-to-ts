/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersListFollowersForUserQueryParams {
	per_page?: number;
	page?: number;
}

export interface UsersListFollowersForUserPathParams {
	username: string;
}

export interface UsersListFollowersForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListFollowersForUserPathParams {
	queryParams: UsersListFollowersForUserQueryParams;
}

export async function usersListFollowersForUser(props: UsersListFollowersForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/followers`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}