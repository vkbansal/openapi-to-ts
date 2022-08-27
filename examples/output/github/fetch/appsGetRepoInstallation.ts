export interface AppsGetRepoInstallationPathParams {
	owner: string;
	repo: string;
}

export interface AppsGetRepoInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetRepoInstallationPathParams {}

export async function appsGetRepoInstallation(props: AppsGetRepoInstallationProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/installation`, {
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
