export interface ReposCreatePagesSitePathParams {
	owner: string;
	repo: string;
}

/**
 * The source branch and directory used to publish your Pages site.
 */
export interface ReposCreatePagesSiteRequestBody {
	/**
	 * The source branch and directory used to publish your Pages site.
	 */
	source: {
		/**
		 * The repository branch used to publish your site's source files.
		 */
		branch: string;
		/**
		 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
		 * @default "/"
		 */
		path?: '/' | '/docs';
	};
}

export interface ReposCreatePagesSiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreatePagesSitePathParams {
	body: ReposCreatePagesSiteRequestBody;
}

export async function reposCreatePagesSite(props: ReposCreatePagesSiteProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages`, {
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
