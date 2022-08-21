/**
 * A version of a software package
 */
export interface PackageVersion {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	deleted_at?: string;
	description?: string;
	/**
  * @example
https://github.com/orgs/github/packages/container/super-linter/786068
  */
	html_url?: string;
	/**
  * Unique identifier of the package version.
  * @example
1
  */
	id: number;
	/**
  * @example
MIT
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
  * @example
docker
  */
		package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	};
	/**
  * The name of the package version.
  * @example
latest
  */
	name: string;
	/**
  * @example
https://github.com/orgs/github/packages/container/package/super-linter
  */
	package_html_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @example
https://api.github.com/orgs/github/packages/container/super-linter/versions/786068
  */
	url: string;
}
