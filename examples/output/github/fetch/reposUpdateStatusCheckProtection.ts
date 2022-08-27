export interface ReposUpdateStatusCheckProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposUpdateStatusCheckProtectionRequestBody {
	/**
	 * The list of status checks to require in order to merge into this branch
	 */
	contexts?: string[];
	/**
	 * Require branches to be up to date before merging.
	 */
	strict?: boolean;
}

export interface ReposUpdateStatusCheckProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateStatusCheckProtectionPathParams {
	body: ReposUpdateStatusCheckProtectionRequestBody;
}

export async function reposUpdateStatusCheckProtection(
	props: ReposUpdateStatusCheckProtectionProps,
) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks`,
		{
			method: 'PATCH',
			body: JSON.stringify(body),
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
