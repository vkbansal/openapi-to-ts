export interface ReposRemoveStatusCheckProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRemoveStatusCheckProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveStatusCheckProtectionPathParams {}

export async function reposRemoveStatusCheckProtection(
	props: ReposRemoveStatusCheckProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks`,
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
