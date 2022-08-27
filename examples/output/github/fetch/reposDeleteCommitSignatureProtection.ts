export interface ReposDeleteCommitSignatureProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposDeleteCommitSignatureProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteCommitSignatureProtectionPathParams {}

export async function reposDeleteCommitSignatureProtection(
	props: ReposDeleteCommitSignatureProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`,
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
