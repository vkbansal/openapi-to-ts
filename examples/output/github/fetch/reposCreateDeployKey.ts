export interface ReposCreateDeployKeyPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateDeployKeyRequestBody {
	/**
	 * The contents of the key.
	 */
	key: string;
	/**
	 * If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
	 *
	 * Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://help.github.com/articles/permission-levels-for-a-user-account-repository/)."
	 */
	read_only?: boolean;
	/**
	 * A name for the key.
	 */
	title?: string;
}

export interface ReposCreateDeployKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateDeployKeyPathParams {
	body: ReposCreateDeployKeyRequestBody;
}

export async function reposCreateDeployKey(props: ReposCreateDeployKeyProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/keys`, {
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
