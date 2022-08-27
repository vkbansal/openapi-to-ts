export interface AppsRevokeInstallationAccessTokenProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function appsRevokeInstallationAccessToken(
	props: AppsRevokeInstallationAccessTokenProps,
) {
	const { ...rest } = props;

	const response = await fetch(`/installation/token`, {
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
