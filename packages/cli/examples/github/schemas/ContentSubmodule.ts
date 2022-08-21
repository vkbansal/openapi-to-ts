/**
 * An object describing a symlink
 */
export interface ContentSubmodule {
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
	/**
	 * @format uri
	 */
	submodule_git_url: string;
	type: string;
	/**
	 * @format uri
	 */
	url: string;
}
