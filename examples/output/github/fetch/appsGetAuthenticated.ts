export interface AppsGetAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function appsGetAuthenticated(props: AppsGetAuthenticatedProps) {
	const { ...rest } = props;

	const response = await fetch(`/app`, {
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
