/**
 * Status Check Policy
 */
export interface StatusCheckPolicy {
	/**
  * @example
continuous-integration/travis-ci
  */
	contexts: string[];
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts
  */
	contexts_url: string;
	/**
  * @example
true
  */
	strict: boolean;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks
  */
	url: string;
}
