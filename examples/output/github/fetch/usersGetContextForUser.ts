/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersGetContextForUserQueryParams {
	subject_type?: 'issue' | 'organization' | 'pull_request' | 'repository';
	subject_id?: string;
}

export interface UsersGetContextForUserPathParams {
	username: string;
}

export interface UsersGetContextForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersGetContextForUserPathParams {
	queryParams: UsersGetContextForUserQueryParams;
}

export async function usersGetContextForUser(props: UsersGetContextForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/hovercard`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}