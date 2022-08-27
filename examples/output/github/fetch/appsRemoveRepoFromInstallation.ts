export interface AppsRemoveRepoFromInstallationPathParams {
	installation_id: number;
	repository_id: number;
}

export interface AppsRemoveRepoFromInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsRemoveRepoFromInstallationPathParams {}

export async function appsRemoveRepoFromInstallation(props: AppsRemoveRepoFromInstallationProps) {
	const { installation_id, repository_id, ...rest } = props;

	const response = await fetch(
		`/user/installations/${installation_id}/repositories/${repository_id}`,
		{
			method: 'DELETE',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
