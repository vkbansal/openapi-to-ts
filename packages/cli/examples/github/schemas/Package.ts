import { SimpleUser } from '../schemas/SimpleUser';
import { MinimalRepository } from '../schemas/MinimalRepository';
/**
 * A software package
 */
export interface Package {
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
  * @example
https://github.com/orgs/github/packages/container/package/super-linter
  */
	html_url: string;
	/**
  * Unique identifier of the package.
  * @example
1
  */
	id: number;
	/**
  * The name of the package.
  * @example
super-linter
  */
	name: string;
	owner?: SimpleUser | null;
	/**
  * @example
docker
  */
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	repository?: MinimalRepository | null;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
  * @example
https://api.github.com/orgs/github/packages/container/super-linter
  */
	url: string;
	/**
  * The number of versions of the package.
  * @example
1
  */
	version_count: number;
	/**
  * @example
private
  */
	visibility: 'private' | 'public';
}
