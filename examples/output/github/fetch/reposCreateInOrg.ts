export interface ReposCreateInOrgPathParams {
	org: string;
}

export interface ReposCreateInOrgRequestBody {
	/**
	 * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
	 * @default true
	 */
	allow_merge_commit?: boolean;
	/**
	 * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
	 * @default true
	 */
	allow_rebase_merge?: boolean;
	/**
	 * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
	 * @default true
	 */
	allow_squash_merge?: boolean;
	/**
	 * Pass `true` to create an initial commit with empty README.
	 */
	auto_init?: boolean;
	/**
	 * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
	 */
	delete_branch_on_merge?: boolean;
	/**
	 * A short description of the repository.
	 */
	description?: string;
	/**
	 * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
	 */
	gitignore_template?: string;
	/**
	 * Either `true` to enable issues for this repository or `false` to disable them.
	 * @default true
	 */
	has_issues?: boolean;
	/**
	 * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
	 * @default true
	 */
	has_projects?: boolean;
	/**
	 * Either `true` to enable the wiki for this repository or `false` to disable it.
	 * @default true
	 */
	has_wiki?: boolean;
	/**
	 * A URL with more information about the repository.
	 */
	homepage?: string;
	/**
	 * Either `true` to make this repo available as a template repository or `false` to prevent it.
	 */
	is_template?: boolean;
	/**
	 * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
	 */
	license_template?: string;
	/**
	 * The name of the repository.
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
	/**
	 * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
	 * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
	 */
	visibility?: 'internal' | 'private' | 'public' | 'visibility';
}

export interface ReposCreateInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateInOrgPathParams {
	body: ReposCreateInOrgRequestBody;
}

export async function reposCreateInOrg(props: ReposCreateInOrgProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/repos`, {
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
