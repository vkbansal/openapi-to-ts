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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
