/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

/**
 * A list of directory items
 */
export type ContentDirectory = Array<{
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
	content?: string;
	/**
	 * @format uri
	 */
	download_url: string | null;
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
	type: string;
	/**
	 * @format uri
	 */
	url: string;
}>;
