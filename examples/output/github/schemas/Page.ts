/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { PagesSourceHash } from '../schemas/PagesSourceHash';
/**
 * The configuration for GitHub Pages for a repository.
 */
export interface Page {
	/**
	 * The Pages site's custom domain
	 * @example example.com
	 */
	cname: string | null;
	/**
	 * Whether the Page has a custom 404 page.
	 */
	custom_404: boolean;
	/**
	 * The web address the Page can be accessed from.
	 * @format uri
	 * @example https://example.com
	 */
	html_url?: string;
	/**
	 * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
	 * @example true
	 */
	public: boolean;
	source?: PagesSourceHash;
	/**
	 * The status of the most recent build of the Page.
	 * @example built
	 */
	status: 'building' | 'built' | 'errored' | null;
	/**
	 * The API address for accessing this Page resource.
	 * @format uri
	 * @example https://api.github.com/repos/github/hello-world/pages
	 */
	url: string;
}
