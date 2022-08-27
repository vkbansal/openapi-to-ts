export interface GitCreateTreePathParams {
	owner: string;
	repo: string;
}

export interface GitCreateTreeRequestBody {
	/**
	 * The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by `base_tree` and entries defined in the `tree` parameter. Entries defined in the `tree` parameter will overwrite items from `base_tree` with the same `path`. If you're creating new changes on a branch, then normally you'd set `base_tree` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
	 * If not provided, GitHub will create a new Git tree object from only the entries defined in the `tree` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the `tree` parameter will be listed as deleted by the new commit.
	 *
	 */
	base_tree?: string;
	/**
	 * Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
	 */
	tree: Array<{
		/**
		 * The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.
		 *
		 * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
		 */
		content?: string;
		/**
		 * The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
		 */
		mode?: '040000' | '100644' | '100755' | '120000' | '160000';
		/**
		 * The file referenced in the tree.
		 */
		path?: string;
		/**
		 * The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.
		 *
		 * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
		 */
		sha?: string | null;
		/**
		 * Either `blob`, `tree`, or `commit`.
		 */
		type?: 'blob' | 'commit' | 'tree';
	}>;
}

export interface GitCreateTreeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitCreateTreePathParams {
	body: GitCreateTreeRequestBody;
}

export async function gitCreateTree(props: GitCreateTreeProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/trees`, {
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
