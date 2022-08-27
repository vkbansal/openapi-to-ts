export interface AppsGetUserInstallationPathParams {
	username: string;
}

export interface AppsGetUserInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetUserInstallationPathParams {}

export async function appsGetUserInstallation(props: AppsGetUserInstallationProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/users/${username}/installation`, {
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
