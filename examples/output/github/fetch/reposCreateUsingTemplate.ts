export interface ReposCreateUsingTemplatePathParams {
	template_owner: string;
	template_repo: string;
}

export interface ReposCreateUsingTemplateRequestBody {
	/**
	 * A short description of the new repository.
	 */
	description?: string;
	/**
	 * Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.
	 */
	include_all_branches?: boolean;
	/**
	 * The name of the new repository.
	 */
	name: string;
	/**
	 * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
	 */
	owner?: string;
	/**
	 * Either `true` to create a new private repository or `false` to create a new public one.
	 */
	private?: boolean;
}

export interface ReposCreateUsingTemplateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateUsingTemplatePathParams {
	body: ReposCreateUsingTemplateRequestBody;
}

export async function reposCreateUsingTemplate(props: ReposCreateUsingTemplateProps) {
	const { template_owner, template_repo, body, ...rest } = props;

	const response = await fetch(`/repos/${template_owner}/${template_repo}/generate`, {
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
