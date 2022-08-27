/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}