/**
 * Protected Branch Admin Enforced
 */
export interface ProtectedBranchAdminEnforced {
	/**
  * @example
true
  */
	enabled: boolean;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins
  */
	url: string;
}
