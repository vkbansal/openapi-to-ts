export interface LoginUserQueryParams {
	username: string;
	password: string;
}

export interface LoginUserProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: LoginUserQueryParams;
}

export async function loginUser(props: LoginUserProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/login`, {
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
