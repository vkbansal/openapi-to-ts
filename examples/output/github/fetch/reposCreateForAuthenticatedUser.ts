export interface ReposCreateForAuthenticatedUserRequestBody {
	/**
	 * Whether to allow merge commits for pull requests.
	 * @default true
	 * @example true
	 */
	allow_merge_commit?: boolean;
	/**
	 * Whether to allow rebase merges for pull requests.
	 * @default true
	 * @example true
	 */
	allow_rebase_merge?: boolean;
	/**
	 * Whether to allow squash merges for pull requests.
	 * @default true
	 * @example true
	 */
	allow_squash_merge?: boolean;
	/**
	 * Whether the repository is initialized with a minimal README.
	 */
	auto_init?: boolean;
	/**
	 * Whether to delete head branches when pull requests are merged
	 */
	delete_branch_on_merge?: boolean;
	/**
	 * A short description of the repository.
	 */
	description?: string;
	/**
	 * The desired language or platform to apply to the .gitignore.
	 * @example "Haskell"
	 */
	gitignore_template?: string;
	/**
	 * Whether downloads are enabled.
	 * @default true
	 * @example true
	 */
	has_downloads?: boolean;
	/**
	 * Whether issues are enabled.
	 * @default true
	 * @example true
	 */
	has_issues?: boolean;
	/**
	 * Whether projects are enabled.
	 * @default true
	 * @example true
	 */
	has_projects?: boolean;
	/**
	 * Whether the wiki is enabled.
	 * @default true
	 * @example true
	 */
	has_wiki?: boolean;
	/**
	 * A URL with more information about the repository.
	 */
	homepage?: string;
	/**
	 * Whether this repository acts as a template that can be used to generate new repositories.
	 * @example true
	 */
	is_template?: boolean;
	/**
	 * The license keyword of the open source license for this repository.
	 * @example "mit"
	 */
	license_template?: string;
	/**
	 * The name of the repository.
	 * @example "Team Environment"
	 */
	name: string;
	/**
	 * Whether the repository is private.
	 */
	private?: boolean;
	/**
	 * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
	 */
	team_id?: number;
}

export interface ReposCreateForAuthenticatedUserProps extends Omit<RequestInit, 'method' | 'body'> {
	body: ReposCreateForAuthenticatedUserRequestBody;
}

export async function reposCreateForAuthenticatedUser(props: ReposCreateForAuthenticatedUserProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/repos`, {
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
