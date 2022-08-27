export interface AppsDeleteInstallationPathParams {
	installation_id: number;
}

export interface AppsDeleteInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsDeleteInstallationPathParams {}

export async function appsDeleteInstallation(props: AppsDeleteInstallationProps) {
	const { installation_id, ...rest } = props;

	const response = await fetch(`/app/installations/${installation_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
