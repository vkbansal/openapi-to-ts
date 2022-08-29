/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

/**
 * Content File
 */
export interface ContentFile {
	_links: {
		/**
		 * @format uri
		 */
		git: string | null;
		/**
		 * @format uri
		 */
		html: string | null;
		/**
		 * @format uri
		 */
		self: string;
	};
	content: string;
	/**
	 * @format uri
	 */
	download_url: string | null;
	encoding: string;
	/**
	 * @format uri
	 */
	git_url: string | null;
	/**
	 * @format uri
	 */
	html_url: string | null;
	name: string;
	path: string;
	sha: string;
	size: number;
	/**
	 * @example "\"git://example.com/defunkt/dotjs.git\""
	 */
	submodule_git_url?: string;
	/**
	 * @example "\"actual/actual.md\""
	 */
	target?: string;
	type: string;
	/**
	 * @format uri
	 */
	url: string;
}
