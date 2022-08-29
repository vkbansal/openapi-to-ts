/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { Link } from '../schemas/Link';
import type { SimpleUser } from '../schemas/SimpleUser';
import type { AuthorAssociation } from '../schemas/AuthorAssociation';
import type { AutoMerge } from '../schemas/AutoMerge';
import type { Repository } from '../schemas/Repository';
import type { Milestone } from '../schemas/Milestone';
import type { TeamSimple } from '../schemas/TeamSimple';

/**
 * Pull Request Simple
 */
export interface PullRequestSimple {
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
	 * @example "too heated"
	 */
	active_lock_reason?: string | null;
	assignee: SimpleUser | null;
	assignees?: SimpleUser[] | null;
	author_association: AuthorAssociation;
	auto_merge: AutoMerge;
	base: {
		label: string;
		ref: string;
		repo: Repository;
		sha: string;
		user: SimpleUser | null;
	};
	/**
	 * @example "Please pull these awesome changes"
	 */
	body: string | null;
	/**
	 * @format date-time
	 * @example "2011-01-26T19:01:12Z"
	 */
	closed_at: string | null;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments"
	 */
	comments_url: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits"
	 */
	commits_url: string;
	/**
	 * @format date-time
	 * @example "2011-01-26T19:01:12Z"
	 */
	created_at: string;
	/**
	 * @format uri
	 * @example "https://github.com/octocat/Hello-World/pull/1347.diff"
	 */
	diff_url: string;
	/**
	 * Indicates whether or not the pull request is a draft.
	 */
	draft?: boolean;
	head: {
		label: string;
		ref: string;
		repo: Repository;
		sha: string;
		user: SimpleUser | null;
	};
	/**
	 * @format uri
	 * @example "https://github.com/octocat/Hello-World/pull/1347"
	 */
	html_url: string;
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/issues/1347"
	 */
	issue_url: string;
	labels: Array<{
		color?: string;
		default?: boolean;
		description?: string;
		id?: number;
		name?: string;
		node_id?: string;
		url?: string;
	}>;
	/**
	 * @example true
	 */
	locked: boolean;
	/**
	 * @example "e5bd3914e2e596debea16f433f57875b5b90bcd6"
	 */
	merge_commit_sha: string | null;
	/**
	 * @format date-time
	 * @example "2011-01-26T19:01:12Z"
	 */
	merged_at: string | null;
	milestone: Milestone | null;
	/**
	 * @example "MDExOlB1bGxSZXF1ZXN0MQ=="
	 */
	node_id: string;
	/**
	 * @example 1347
	 */
	number: number;
	/**
	 * @format uri
	 * @example "https://github.com/octocat/Hello-World/pull/1347.patch"
	 */
	patch_url: string;
	requested_reviewers?: SimpleUser[] | null;
	requested_teams?: TeamSimple[] | null;
	/**
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}"
	 */
	review_comment_url: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments"
	 */
	review_comments_url: string;
	/**
	 * @example "open"
	 */
	state: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e"
	 */
	statuses_url: string;
	/**
	 * @example "new-feature"
	 */
	title: string;
	/**
	 * @format date-time
	 * @example "2011-01-26T19:01:12Z"
	 */
	updated_at: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/1347"
	 */
	url: string;
	user: SimpleUser | null;
}
