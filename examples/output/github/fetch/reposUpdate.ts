export interface ReposUpdatePathParams {
	owner: string;
	repo: string;
}

export interface ReposUpdateRequestBody {
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
	 * `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
	 */
	archived?: boolean;
	/**
	 * Updates the default branch for this repository.
	 */
	default_branch?: string;
	/**
	 * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
	 */
	delete_branch_on_merge?: boolean;
	/**
	 * A short description of the repository.
	 */
	description?: string;
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
	 * The name of the repository.
	 */
	name?: string;
	/**
	 * Either `true` to make the repository private or `false` to make it public. Default: `false`.
	 * **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
	 */
	private?: boolean;
	/**
	 * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.
	 */
	visibility?: 'internal' | 'private' | 'public' | 'visibility';
}

export interface ReposUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdatePathParams {
	body: ReposUpdateRequestBody;
}

export async function reposUpdate(props: ReposUpdateProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}`, {
		method: 'PATCH',
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
