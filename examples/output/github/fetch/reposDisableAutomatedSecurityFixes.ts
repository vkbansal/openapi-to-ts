export interface ReposDisableAutomatedSecurityFixesPathParams {
	owner: string;
	repo: string;
}

export interface ReposDisableAutomatedSecurityFixesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDisableAutomatedSecurityFixesPathParams {}

export async function reposDisableAutomatedSecurityFixes(
	props: ReposDisableAutomatedSecurityFixesProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/automated-security-fixes`, {
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
