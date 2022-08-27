/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { LicenseSimple } from '../schemas/LicenseSimple';
import { SimpleUser } from '../schemas/SimpleUser';
import { Repository } from '../schemas/Repository';
/**
 * A team's access to a repository.
 */
export interface TeamRepository {
	/**
	 * Whether to allow merge commits for pull requests.
	 * @default true
	 * @example true
	 */
	allow_merge_commit?: boolean;
	/**
	 * Whether to allow rebase merges for pull requests.
	 * @default true
	 * @example true
	 */
	allow_rebase_merge?: boolean;
	/**
	 * Whether to allow squash merges for pull requests.
	 * @default true
	 * @example true
	 */
	allow_squash_merge?: boolean;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}
	 */
	archive_url: string;
	/**
	 * Whether the repository is archived.
	 */
	archived: boolean;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/assignees{/user}
	 */
	assignees_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}
	 */
	blobs_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/branches{/branch}
	 */
	branches_url: string;
	/**
	 * @example https://github.com/octocat/Hello-World.git
	 */
	clone_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}
	 */
	collaborators_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/comments{/number}
	 */
	comments_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/commits{/sha}
	 */
	commits_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}
	 */
	compare_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/contents/{+path}
	 */
	contents_url: string;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/contributors
	 */
	contributors_url: string;
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	created_at: string | null;
	/**
	 * The default branch of the repository.
	 * @example master
	 */
	default_branch: string;
	/**
	 * Whether to delete head branches when pull requests are merged
	 */
	delete_branch_on_merge?: boolean;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/deployments
	 */
	deployments_url: string;
	/**
	 * @example This your first repo!
	 */
	description: string | null;
	/**
	 * Returns whether or not this repository disabled.
	 */
	disabled: boolean;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/downloads
	 */
	downloads_url: string;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/events
	 */
	events_url: string;
	fork: boolean;
	forks: number;
	/**
	 * @example 9
	 */
	forks_count: number;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/forks
	 */
	forks_url: string;
	/**
	 * @example octocat/Hello-World
	 */
	full_name: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}
	 */
	git_commits_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}
	 */
	git_refs_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}
	 */
	git_tags_url: string;
	/**
	 * @example git:github.com/octocat/Hello-World.git
	 */
	git_url: string;
	/**
	 * Whether downloads are enabled.
	 * @default true
	 * @example true
	 */
	has_downloads: boolean;
	/**
	 * Whether issues are enabled.
	 * @default true
	 * @example true
	 */
	has_issues: boolean;
	has_pages: boolean;
	/**
	 * Whether projects are enabled.
	 * @default true
	 * @example true
	 */
	has_projects: boolean;
	/**
	 * Whether the wiki is enabled.
	 * @default true
	 * @example true
	 */
	has_wiki: boolean;
	/**
	 * @format uri
	 * @example https://github.com
	 */
	homepage: string | null;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/hooks
	 */
	hooks_url: string;
	/**
	 * @format uri
	 * @example https://github.com/octocat/Hello-World
	 */
	html_url: string;
	/**
	 * Unique identifier of the repository
	 * @example 42
	 */
	id: number;
	/**
	 * Whether this repository acts as a template that can be used to generate new repositories.
	 * @example true
	 */
	is_template?: boolean;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}
	 */
	issue_comment_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/issues/events{/number}
	 */
	issue_events_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/issues{/number}
	 */
	issues_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/keys{/key_id}
	 */
	keys_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/labels{/name}
	 */
	labels_url: string;
	language: string | null;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/languages
	 */
	languages_url: string;
	license: LicenseSimple | null;
	master_branch?: string;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/merges
	 */
	merges_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/milestones{/number}
	 */
	milestones_url: string;
	/**
	 * @format uri
	 * @example git:git.example.com/octocat/Hello-World
	 */
	mirror_url: string | null;
	/**
	 * The name of the repository.
	 * @example Team Environment
	 */
	name: string;
	network_count?: number;
	/**
	 * @example MDEwOlJlcG9zaXRvcnkxMjk2MjY5
	 */
	node_id: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}
	 */
	notifications_url: string;
	open_issues: number;
	open_issues_count: number;
	owner: SimpleUser | null;
	permissions?: {
		admin: boolean;
		maintain?: boolean;
		pull: boolean;
		push: boolean;
		triage?: boolean;
	};
	/**
	 * Whether the repository is private or public.
	 */
	private: boolean;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/pulls{/number}
	 */
	pulls_url: string;
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	pushed_at: string | null;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/releases{/id}
	 */
	releases_url: string;
	/**
	 * @example 108
	 */
	size: number;
	/**
	 * @example git@github.com:octocat/Hello-World.git
	 */
	ssh_url: string;
	/**
	 * @example 80
	 */
	stargazers_count: number;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/stargazers
	 */
	stargazers_url: string;
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/statuses/{sha}
	 */
	statuses_url: string;
	subscribers_count?: number;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/subscribers
	 */
	subscribers_url: string;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/subscription
	 */
	subscription_url: string;
	/**
	 * @format uri
	 * @example https://svn.github.com/octocat/Hello-World
	 */
	svn_url: string;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/tags
	 */
	tags_url: string;
	/**
	 * @format uri
	 * @example http://api.github.com/repos/octocat/Hello-World/teams
	 */
	teams_url: string;
	temp_clone_token?: string;
	template_repository?: Repository | null;
	topics?: string[];
	/**
	 * @example http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}
	 */
	trees_url: string;
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	updated_at: string | null;
	/**
	 * @format uri
	 * @example https://api.github.com/repos/octocat/Hello-World
	 */
	url: string;
	/**
	 * The repository visibility: public, private, or internal.
	 * @default public
	 */
	visibility?: string;
	watchers: number;
	/**
	 * @example 80
	 */
	watchers_count: number;
}
