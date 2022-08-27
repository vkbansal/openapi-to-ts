export interface AppsUnsuspendInstallationPathParams {
	installation_id: number;
}

export interface AppsUnsuspendInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsUnsuspendInstallationPathParams {}

export async function appsUnsuspendInstallation(props: AppsUnsuspendInstallationProps) {
	const { installation_id, ...rest } = props;

	const response = await fetch(`/app/installations/${installation_id}/suspended`, {
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
