export interface AppsAddRepoToInstallationPathParams {
	installation_id: number;
	repository_id: number;
}

export interface AppsAddRepoToInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsAddRepoToInstallationPathParams {}

export async function appsAddRepoToInstallation(props: AppsAddRepoToInstallationProps) {
	const { installation_id, repository_id, ...rest } = props;

	const response = await fetch(
		`/user/installations/${installation_id}/repositories/${repository_id}`,
		{
			method: 'PUT',
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
