/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetCommitSignatureProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetCommitSignatureProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCommitSignatureProtectionPathParams {}

export async function reposGetCommitSignatureProtection(
	props: ReposGetCommitSignatureProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}