/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersListQueryParams {
	since?: number;
	per_page?: number;
}

export interface UsersListProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListQueryParams;
}

export async function usersList(props: UsersListProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/users`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
