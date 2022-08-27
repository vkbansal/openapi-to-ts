export interface AppsSuspendInstallationPathParams {
	installation_id: number;
}

export interface AppsSuspendInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsSuspendInstallationPathParams {}

export async function appsSuspendInstallation(props: AppsSuspendInstallationProps) {
	const { installation_id, ...rest } = props;

	const response = await fetch(`/app/installations/${installation_id}/suspended`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
