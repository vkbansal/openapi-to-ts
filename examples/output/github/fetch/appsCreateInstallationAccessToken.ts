export interface AppsCreateInstallationAccessTokenPathParams {
	installation_id: number;
}

export interface AppsCreateInstallationAccessTokenRequestBody {
	permissions?: AppPermissions;
	/**
	 * List of repository names that the token should have access to
	 */
	repositories?: string[];
	/**
	 * List of repository IDs that the token should have access to
	 * @example [1]
	 */
	repository_ids?: number[];
}

export interface AppsCreateInstallationAccessTokenProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCreateInstallationAccessTokenPathParams {
	body: AppsCreateInstallationAccessTokenRequestBody;
}

export async function appsCreateInstallationAccessToken(
	props: AppsCreateInstallationAccessTokenProps,
) {
	const { installation_id, body, ...rest } = props;

	const response = await fetch(`/app/installations/${installation_id}/access_tokens`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
