export interface AppsGetInstallationPathParams {
	installation_id: number;
}

export interface AppsGetInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetInstallationPathParams {}

export async function appsGetInstallation(props: AppsGetInstallationProps) {
	const { installation_id, ...rest } = props;

	const response = await fetch(`/app/installations/${installation_id}`, {
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
