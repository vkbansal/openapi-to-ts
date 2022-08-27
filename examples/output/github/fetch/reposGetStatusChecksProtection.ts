/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetStatusChecksProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetStatusChecksProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetStatusChecksProtectionPathParams {}

export async function reposGetStatusChecksProtection(props: ReposGetStatusChecksProtectionProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
