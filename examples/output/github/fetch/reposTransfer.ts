export interface ReposTransferPathParams {
	owner: string;
	repo: string;
}

export interface ReposTransferRequestBody {
	/**
	 * The username or organization name the repository will be transferred to.
	 */
	new_owner: string;
	/**
	 * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
	 */
	team_ids?: number[];
}

export interface ReposTransferProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposTransferPathParams {
	body: ReposTransferRequestBody;
}

export async function reposTransfer(props: ReposTransferProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/transfer`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
