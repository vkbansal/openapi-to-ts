/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Configures a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
 */
export async function reposCreatePagesSite(props: ReposCreatePagesSiteProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, ReposCreatePagesSiteRequestBody>({
		path: `/repos/${owner}/${repo}/pages`,
		method: 'POST',
		...rest,
	});
}
