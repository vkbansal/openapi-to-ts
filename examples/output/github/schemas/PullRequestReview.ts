/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { AuthorAssociation } from '../schemas/AuthorAssociation';
import type { SimpleUser } from '../schemas/SimpleUser';

/**
 * Pull Request Reviews are reviews on pull requests.
 */
export interface PullRequestReview {
	_links: {
		html: {
			href: string;
		};
		pull_request: {
			href: string;
		};
	};
	author_association: AuthorAssociation;
	/**
	 * The text of the review.
	 * @example "This looks great."
	 */
	body: string;
	body_html?: string;
	body_text?: string;
	/**
	 * A commit SHA for the review.
	 * @example "54bb654c9e6025347f57900a4a5c2313a96b8035"
	 */
	commit_id: string;
	/**
	 * @format uri
	 * @example "https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80"
	 */
	html_url: string;
	/**
	 * Unique identifier of the review
	 * @example 42
	 */
	id: number;
	/**
	 * @example "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA="
	 */
	node_id: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/12"
	 */
	pull_request_url: string;
	/**
	 * @example "CHANGES_REQUESTED"
	 */
	state: string;
	/**
	 * @format date-time
	 */
	submitted_at?: string;
	user: SimpleUser | null;
}
