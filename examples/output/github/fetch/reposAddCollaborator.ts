export interface ReposAddCollaboratorPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposAddCollaboratorRequestBody {
	/**
	 * The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:
	 * \* `pull` - can pull, but not push to or administer this repository.
	 * \* `push` - can pull and push, but not administer this repository.
	 * \* `admin` - can pull, push and administer this repository.
	 * \* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
	 * \* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
	 * @default "push"
	 */
	permission?: 'admin' | 'maintain' | 'pull' | 'push' | 'triage';
	/**
	 * @example "\"push\""
	 */
	permissions?: string;
}

export interface ReposAddCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAddCollaboratorPathParams {
	body: ReposAddCollaboratorRequestBody;
}

export async function reposAddCollaborator(props: ReposAddCollaboratorProps) {
	const { owner, repo, username, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/collaborators/${username}`, {
		method: 'PUT',
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
