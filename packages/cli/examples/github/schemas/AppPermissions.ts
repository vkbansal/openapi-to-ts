/**
  * The permissions granted to the user-to-server access token.
  * @example
[object Object]
  */
export interface AppPermissions {
	/**
	 * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`.
	 */
	actions?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`.
	 */
	administration?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`.
	 */
	checks?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`.
	 */
	content_references?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`.
	 */
	contents?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`.
	 */
	deployments?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`.
	 */
	environments?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`.
	 */
	issues?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`.
	 */
	members?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`.
	 */
	metadata?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`.
	 */
	organization_administration?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage the post-receive hooks for an organization. Can be one of: `read` or `write`.
	 */
	organization_hooks?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`.
	 */
	organization_plan?: 'read';
	/**
	 * The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.
	 */
	organization_projects?: 'admin' | 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`.
	 */
	organization_secrets?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization. Can be one of: `read` or `write`.
	 */
	organization_self_hosted_runners?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`.
	 */
	organization_user_blocking?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`.
	 */
	packages?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`.
	 */
	pages?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`.
	 */
	pull_requests?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage the post-receive hooks for a repository. Can be one of: `read` or `write`.
	 */
	repository_hooks?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.
	 */
	repository_projects?: 'admin' | 'read' | 'write';
	/**
	 * The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`.
	 */
	secret_scanning_alerts?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`.
	 */
	secrets?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`.
	 */
	security_events?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`.
	 */
	single_file?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`.
	 */
	statuses?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`.
	 */
	team_discussions?: 'read' | 'write';
	/**
	 * The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`.
	 */
	vulnerability_alerts?: 'read';
	/**
	 * The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`.
	 */
	workflows?: 'write';
}
