import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { Link } from '../schemas/Link';
import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { AutoMerge } from '../schemas/AutoMerge';
import { LicenseSimple } from '../schemas/LicenseSimple';
import { SimpleUser } from '../schemas/SimpleUser';
import { Milestone } from '../schemas/Milestone';
import { SimpleUser } from '../schemas/SimpleUser';
import { TeamSimple } from '../schemas/TeamSimple';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
 */
export interface PullRequest {
	_links: {
		comments: Link;
		commits: Link;
		html: Link;
		issue: Link;
		review_comment: Link;
		review_comments: Link;
		self: Link;
		statuses: Link;
	};
	/**
  * @example
too heated
  */
	active_lock_reason?: string | null;
	/**
  * @example
100
  */
	additions: number;
	assignee: SimpleUser | null;
	assignees?: SimpleUser[] | null;
	author_association: AuthorAssociation;
	auto_merge: AutoMerge;
	base: {
		label: string;
		ref: string;
		repo: {
			allow_merge_commit?: boolean;
			allow_rebase_merge?: boolean;
			allow_squash_merge?: boolean;
			archive_url: string;
			archived: boolean;
			assignees_url: string;
			blobs_url: string;
			branches_url: string;
			clone_url: string;
			collaborators_url: string;
			comments_url: string;
			commits_url: string;
			compare_url: string;
			contents_url: string;
			/**
			 * @format uri
			 */
			contributors_url: string;
			/**
			 * @format date-time
			 */
			created_at: string;
			default_branch: string;
			/**
			 * @format uri
			 */
			deployments_url: string;
			description: string | null;
			disabled: boolean;
			/**
			 * @format uri
			 */
			downloads_url: string;
			/**
			 * @format uri
			 */
			events_url: string;
			fork: boolean;
			forks: number;
			forks_count: number;
			/**
			 * @format uri
			 */
			forks_url: string;
			full_name: string;
			git_commits_url: string;
			git_refs_url: string;
			git_tags_url: string;
			git_url: string;
			has_downloads: boolean;
			has_issues: boolean;
			has_pages: boolean;
			has_projects: boolean;
			has_wiki: boolean;
			/**
			 * @format uri
			 */
			homepage: string | null;
			/**
			 * @format uri
			 */
			hooks_url: string;
			/**
			 * @format uri
			 */
			html_url: string;
			id: number;
			issue_comment_url: string;
			issue_events_url: string;
			issues_url: string;
			keys_url: string;
			labels_url: string;
			language: string | null;
			/**
			 * @format uri
			 */
			languages_url: string;
			license: LicenseSimple | null;
			master_branch?: string;
			/**
			 * @format uri
			 */
			merges_url: string;
			milestones_url: string;
			/**
			 * @format uri
			 */
			mirror_url: string | null;
			name: string;
			node_id: string;
			notifications_url: string;
			open_issues: number;
			open_issues_count: number;
			owner: {
				/**
				 * @format uri
				 */
				avatar_url: string;
				events_url: string;
				/**
				 * @format uri
				 */
				followers_url: string;
				following_url: string;
				gists_url: string;
				gravatar_id: string | null;
				/**
				 * @format uri
				 */
				html_url: string;
				id: number;
				login: string;
				node_id: string;
				/**
				 * @format uri
				 */
				organizations_url: string;
				/**
				 * @format uri
				 */
				received_events_url: string;
				/**
				 * @format uri
				 */
				repos_url: string;
				site_admin: boolean;
				starred_url: string;
				/**
				 * @format uri
				 */
				subscriptions_url: string;
				type: string;
				/**
				 * @format uri
				 */
				url: string;
			};
			permissions?: {
				admin: boolean;
				pull: boolean;
				push: boolean;
			};
			private: boolean;
			pulls_url: string;
			/**
			 * @format date-time
			 */
			pushed_at: string;
			releases_url: string;
			size: number;
			ssh_url: string;
			stargazers_count: number;
			/**
			 * @format uri
			 */
			stargazers_url: string;
			statuses_url: string;
			/**
			 * @format uri
			 */
			subscribers_url: string;
			/**
			 * @format uri
			 */
			subscription_url: string;
			/**
			 * @format uri
			 */
			svn_url: string;
			/**
			 * @format uri
			 */
			tags_url: string;
			/**
			 * @format uri
			 */
			teams_url: string;
			temp_clone_token?: string;
			topics?: string[];
			trees_url: string;
			/**
			 * @format date-time
			 */
			updated_at: string;
			/**
			 * @format uri
			 */
			url: string;
			watchers: number;
			watchers_count: number;
		};
		sha: string;
		user: {
			/**
			 * @format uri
			 */
			avatar_url: string;
			events_url: string;
			/**
			 * @format uri
			 */
			followers_url: string;
			following_url: string;
			gists_url: string;
			gravatar_id: string | null;
			/**
			 * @format uri
			 */
			html_url: string;
			id: number;
			login: string;
			node_id: string;
			/**
			 * @format uri
			 */
			organizations_url: string;
			/**
			 * @format uri
			 */
			received_events_url: string;
			/**
			 * @format uri
			 */
			repos_url: string;
			site_admin: boolean;
			starred_url: string;
			/**
			 * @format uri
			 */
			subscriptions_url: string;
			type: string;
			/**
			 * @format uri
			 */
			url: string;
		};
	};
	/**
  * @example
Please pull these awesome changes
  */
	body: string | null;
	/**
  * @example
5
  */
	changed_files: number;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	closed_at: string | null;
	/**
  * @example
10
  */
	comments: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/1347/comments
  */
	comments_url: string;
	/**
  * @example
3
  */
	commits: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits
  */
	commits_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
3
  */
	deletions: number;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/pull/1347.diff
  */
	diff_url: string;
	/**
	 * Indicates whether or not the pull request is a draft.
	 */
	draft?: boolean;
	head: {
		label: string;
		ref: string;
		repo: {
			allow_merge_commit?: boolean;
			allow_rebase_merge?: boolean;
			allow_squash_merge?: boolean;
			archive_url: string;
			archived: boolean;
			assignees_url: string;
			blobs_url: string;
			branches_url: string;
			clone_url: string;
			collaborators_url: string;
			comments_url: string;
			commits_url: string;
			compare_url: string;
			contents_url: string;
			/**
			 * @format uri
			 */
			contributors_url: string;
			/**
			 * @format date-time
			 */
			created_at: string;
			default_branch: string;
			/**
			 * @format uri
			 */
			deployments_url: string;
			description: string | null;
			disabled: boolean;
			/**
			 * @format uri
			 */
			downloads_url: string;
			/**
			 * @format uri
			 */
			events_url: string;
			fork: boolean;
			forks: number;
			forks_count: number;
			/**
			 * @format uri
			 */
			forks_url: string;
			full_name: string;
			git_commits_url: string;
			git_refs_url: string;
			git_tags_url: string;
			git_url: string;
			has_downloads: boolean;
			has_issues: boolean;
			has_pages: boolean;
			has_projects: boolean;
			has_wiki: boolean;
			/**
			 * @format uri
			 */
			homepage: string | null;
			/**
			 * @format uri
			 */
			hooks_url: string;
			/**
			 * @format uri
			 */
			html_url: string;
			id: number;
			issue_comment_url: string;
			issue_events_url: string;
			issues_url: string;
			keys_url: string;
			labels_url: string;
			language: string | null;
			/**
			 * @format uri
			 */
			languages_url: string;
			license: {
				key: string;
				name: string;
				node_id: string;
				spdx_id: string | null;
				/**
				 * @format uri
				 */
				url: string | null;
			} | null;
			master_branch?: string;
			/**
			 * @format uri
			 */
			merges_url: string;
			milestones_url: string;
			/**
			 * @format uri
			 */
			mirror_url: string | null;
			name: string;
			node_id: string;
			notifications_url: string;
			open_issues: number;
			open_issues_count: number;
			owner: {
				/**
				 * @format uri
				 */
				avatar_url: string;
				events_url: string;
				/**
				 * @format uri
				 */
				followers_url: string;
				following_url: string;
				gists_url: string;
				gravatar_id: string | null;
				/**
				 * @format uri
				 */
				html_url: string;
				id: number;
				login: string;
				node_id: string;
				/**
				 * @format uri
				 */
				organizations_url: string;
				/**
				 * @format uri
				 */
				received_events_url: string;
				/**
				 * @format uri
				 */
				repos_url: string;
				site_admin: boolean;
				starred_url: string;
				/**
				 * @format uri
				 */
				subscriptions_url: string;
				type: string;
				/**
				 * @format uri
				 */
				url: string;
			};
			permissions?: {
				admin: boolean;
				pull: boolean;
				push: boolean;
			};
			private: boolean;
			pulls_url: string;
			/**
			 * @format date-time
			 */
			pushed_at: string;
			releases_url: string;
			size: number;
			ssh_url: string;
			stargazers_count: number;
			/**
			 * @format uri
			 */
			stargazers_url: string;
			statuses_url: string;
			/**
			 * @format uri
			 */
			subscribers_url: string;
			/**
			 * @format uri
			 */
			subscription_url: string;
			/**
			 * @format uri
			 */
			svn_url: string;
			/**
			 * @format uri
			 */
			tags_url: string;
			/**
			 * @format uri
			 */
			teams_url: string;
			temp_clone_token?: string;
			topics?: string[];
			trees_url: string;
			/**
			 * @format date-time
			 */
			updated_at: string;
			/**
			 * @format uri
			 */
			url: string;
			watchers: number;
			watchers_count: number;
		};
		sha: string;
		user: {
			/**
			 * @format uri
			 */
			avatar_url: string;
			events_url: string;
			/**
			 * @format uri
			 */
			followers_url: string;
			following_url: string;
			gists_url: string;
			gravatar_id: string | null;
			/**
			 * @format uri
			 */
			html_url: string;
			id: number;
			login: string;
			node_id: string;
			/**
			 * @format uri
			 */
			organizations_url: string;
			/**
			 * @format uri
			 */
			received_events_url: string;
			/**
			 * @format uri
			 */
			repos_url: string;
			site_admin: boolean;
			starred_url: string;
			/**
			 * @format uri
			 */
			subscriptions_url: string;
			type: string;
			/**
			 * @format uri
			 */
			url: string;
		};
	};
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/pull/1347
  */
	html_url: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/1347
  */
	issue_url: string;
	labels: Array<{
		color?: string;
		default?: boolean;
		description?: string | null;
		id?: number;
		name?: string;
		node_id?: string;
		url?: string;
	}>;
	/**
  * @example
true
  */
	locked: boolean;
	/**
  * Indicates whether maintainers can modify the pull request.
  * @example
true
  */
	maintainer_can_modify: boolean;
	/**
  * @example
e5bd3914e2e596debea16f433f57875b5b90bcd6
  */
	merge_commit_sha: string | null;
	/**
  * @example
true
  */
	mergeable: boolean | null;
	/**
  * @example
clean
  */
	mergeable_state: string;
	merged: boolean;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	merged_at: string | null;
	merged_by: SimpleUser | null;
	milestone: Milestone | null;
	/**
  * @example
MDExOlB1bGxSZXF1ZXN0MQ==
  */
	node_id: string;
	/**
  * Number uniquely identifying the pull request within its repository.
  * @example
42
  */
	number: number;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/pull/1347.patch
  */
	patch_url: string;
	/**
  * @example
true
  */
	rebaseable?: boolean | null;
	requested_reviewers?: SimpleUser[] | null;
	requested_teams?: TeamSimple[] | null;
	/**
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}
  */
	review_comment_url: string;
	review_comments: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments
  */
	review_comments_url: string;
	/**
  * State of this Pull Request. Either `open` or `closed`.
  * @example
open
  */
	state: 'closed' | 'open';
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	statuses_url: string;
	/**
  * The title of the pull request.
  * @example
Amazing new feature
  */
	title: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/1347
  */
	url: string;
	user: SimpleUser | null;
}
