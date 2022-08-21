/**
 * Content Tree
 */
export interface ContentTree {
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
	entries?: Array<{
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
}
