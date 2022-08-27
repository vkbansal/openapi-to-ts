export interface ReposUpdateInformationAboutPagesSitePathParams {
	owner: string;
	repo: string;
}

export interface ReposUpdateInformationAboutPagesSiteRequestBody {
	/**
	 * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)."
	 */
	cname?: string | null;
	/**
	 * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
	 */
	public?: boolean;
	source: {};
}

export interface ReposUpdateInformationAboutPagesSiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateInformationAboutPagesSitePathParams {
	body: ReposUpdateInformationAboutPagesSiteRequestBody;
}

export async function reposUpdateInformationAboutPagesSite(
	props: ReposUpdateInformationAboutPagesSiteProps,
) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages`, {
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
