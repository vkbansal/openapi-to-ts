export interface AppsGetOrgInstallationPathParams {
	org: string;
}

export interface AppsGetOrgInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetOrgInstallationPathParams {}

export async function appsGetOrgInstallation(props: AppsGetOrgInstallationProps) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/installation`, {
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
