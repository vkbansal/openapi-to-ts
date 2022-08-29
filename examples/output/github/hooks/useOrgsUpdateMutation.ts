/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseOrgsUpdateMutationPathParams {
	org: string;
}

export interface UseOrgsUpdateMutationRequestBody {
	/**
	 * Billing email address. This address is not publicized.
	 */
	billing_email?: string;
	/**
	 * @example "\"http://github.blog\""
	 */
	blog?: string;
	/**
	 * The company name.
	 */
	company?: string;
	/**
	 * Default permission level members have for organization repositories:
	 * \* `read` - can pull, but not push to or administer this repository.
	 * \* `write` - can pull and push, but not administer this repository.
	 * \* `admin` - can pull, push, and administer this repository.
	 * \* `none` - no permissions granted by default.
	 * @default "read"
	 */
	default_repository_permission?: 'admin' | 'none' | 'read' | 'write';
	/**
	 * The description of the company.
	 */
	description?: string;
	/**
	 * The publicly visible email address.
	 */
	email?: string;
	/**
	 * Toggles whether an organization can use organization projects.
	 */
	has_organization_projects?: boolean;
	/**
	 * Toggles whether repositories that belong to the organization can use repository projects.
	 */
	has_repository_projects?: boolean;
	/**
	 * The location.
	 */
	location?: string;
	/**
	 * Specifies which types of repositories non-admin organization members can create. Can be one of:
	 * \* `all` - all organization members can create public and private repositories.
	 * \* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
	 * \* `none` - only admin members can create repositories.
	 * **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
	 */
	members_allowed_repository_creation_type?: 'all' | 'none' | 'private';
	/**
	 * Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:
	 * \* `true` - all organization members can create internal repositories.
	 * \* `false` - only organization owners can create internal repositories.
	 * Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
	 */
	members_can_create_internal_repositories?: boolean;
	/**
	 * Toggles whether organization members can create GitHub Pages sites. Can be one of:
	 * \* `true` - all organization members can create GitHub Pages sites.
	 * \* `false` - no organization members can create GitHub Pages sites. Existing published sites will not be impacted.
	 * @default true
	 */
	members_can_create_pages?: boolean;
	/**
	 * Toggles whether organization members can create private GitHub Pages sites. Can be one of:
	 * \* `true` - all organization members can create private GitHub Pages sites.
	 * \* `false` - no organization members can create private GitHub Pages sites. Existing published sites will not be impacted.
	 * @default true
	 */
	members_can_create_private_pages?: boolean;
	/**
	 * Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:
	 * \* `true` - all organization members can create private repositories.
	 * \* `false` - only organization owners can create private repositories.
	 * Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
	 */
	members_can_create_private_repositories?: boolean;
	/**
	 * Toggles whether organization members can create public GitHub Pages sites. Can be one of:
	 * \* `true` - all organization members can create public GitHub Pages sites.
	 * \* `false` - no organization members can create public GitHub Pages sites. Existing published sites will not be impacted.
	 * @default true
	 */
	members_can_create_public_pages?: boolean;
	/**
	 * Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:
	 * \* `true` - all organization members can create public repositories.
	 * \* `false` - only organization owners can create public repositories.
	 * Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
	 */
	members_can_create_public_repositories?: boolean;
	/**
	 * Toggles the ability of non-admin organization members to create repositories. Can be one of:
	 * \* `true` - all organization members can create repositories.
	 * \* `false` - only organization owners can create repositories.
	 * Default: `true`
	 * **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
	 * @default true
	 */
	members_can_create_repositories?: boolean;
	/**
	 * The shorthand name of the company.
	 */
	name?: string;
	/**
	 * The Twitter username of the company.
	 */
	twitter_username?: string;
}

export interface UseOrgsUpdateMutationProps extends UseOrgsUpdateMutationPathParams {
	body: UseOrgsUpdateMutationRequestBody;
}

/**
 * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
 *
 * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
 */

export function useOrgsUpdateMutation(props: UseOrgsUpdateMutationProps) {
	return useMutation(() => Promise.resolve());
}
