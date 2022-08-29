/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface SelectedActions {
	/**
	 * Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
	 */
	github_owned_allowed: boolean;
	/**
	 * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."
	 */
	patterns_allowed: string[];
	/**
	 * Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.
	 */
	verified_allowed: boolean;
}
