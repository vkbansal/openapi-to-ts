export interface ReposEnableAutomatedSecurityFixesPathParams {
	owner: string;
	repo: string;
}

export interface ReposEnableAutomatedSecurityFixesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposEnableAutomatedSecurityFixesPathParams {}

export async function reposEnableAutomatedSecurityFixes(
	props: ReposEnableAutomatedSecurityFixesProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/automated-security-fixes`, {
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
