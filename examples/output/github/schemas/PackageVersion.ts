/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

/**
 * A version of a software package
 */
export interface PackageVersion {
	/**
	 * @format date-time
	 * @example "2011-04-10T20:09:31Z"
	 */
	created_at: string;
	/**
	 * @format date-time
	 * @example "2014-03-03T18:58:10Z"
	 */
	deleted_at?: string;
	description?: string;
	/**
	 * @example "https://github.com/orgs/github/packages/container/super-linter/786068"
	 */
	html_url?: string;
	/**
	 * Unique identifier of the package version.
	 * @example 1
	 */
	id: number;
	/**
	 * @example "MIT"
	 */
	license?: string;
	metadata?: {
		container?: {
			tags: Array<{}>;
		};
		docker?: {
			tag?: Array<{}>;
		};
		/**
		 * @example "docker"
		 */
		package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	};
	/**
	 * The name of the package version.
	 * @example "latest"
	 */
	name: string;
	/**
	 * @example "https://github.com/orgs/github/packages/container/package/super-linter"
	 */
	package_html_url: string;
	/**
	 * @format date-time
	 * @example "2014-03-03T18:58:10Z"
	 */
	updated_at: string;
	/**
	 * @example "https://api.github.com/orgs/github/packages/container/super-linter/versions/786068"
	 */
	url: string;
}
