export interface ReposCreateCommitSignatureProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposCreateCommitSignatureProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateCommitSignatureProtectionPathParams {}

export async function reposCreateCommitSignatureProtection(
	props: ReposCreateCommitSignatureProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`,
		{
			method: 'POST',
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
