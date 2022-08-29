/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { LicenseSimple } from '../schemas/LicenseSimple';
import type { SimpleUser } from '../schemas/SimpleUser';
import type { SearchResultTextMatches } from '../schemas/SearchResultTextMatches';

/**
 * Repo Search Result Item
 */
export interface RepoSearchResultItem {
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
	delete_branch_on_merge?: boolean;
	/**
	 * @format uri
	 */
	deployments_url: string;
	description: string | null;
	/**
	 * Returns whether or not this repository disabled.
	 */
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
	owner: SimpleUser | null;
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
	score: number;
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
	text_matches?: SearchResultTextMatches;
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
}
