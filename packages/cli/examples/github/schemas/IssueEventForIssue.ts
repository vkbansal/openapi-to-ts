import { SimpleUser } from '../schemas/SimpleUser';
import { AuthorAssociation } from '../schemas/AuthorAssociation';
/**
 * Issue Event for Issue
 */
export interface IssueEventForIssue {
	actor?: SimpleUser;
	author_association?: AuthorAssociation;
	/**
  * @example
":+1:"
  */
	body?: string;
	/**
  * @example
"<p>Accusantium fugiat cumque. Autem qui nostrum. Atque quae ullam.</p>"
  */
	body_html?: string;
	/**
  * @example
"Accusantium fugiat cumque. Autem qui nostrum. Atque quae ullam."
  */
	body_text?: string;
	commit_id?: string | null;
	commit_url?: string | null;
	created_at?: string;
	event?: string;
	/**
  * @example
"https://github.com/owner-3906e11a33a3d55ba449d63f/BBB_Private_Repo/commit/480d4f47447129f015cb327536c522ca683939a1"
  */
	html_url?: string;
	id?: number;
	/**
  * @example
"https://api.github.com/repos/owner-3906e11a33a3d55ba449d63f/AAA_Public_Repo/issues/1"
  */
	issue_url?: string;
	/**
  * @example
"off-topic"
  */
	lock_reason?: string;
	/**
  * @example
"add a bunch of files"
  */
	message?: string;
	node_id?: string;
	/**
  * @example
"https://api.github.com/repos/owner-3906e11a33a3d55ba449d63f/AAA_Public_Repo/pulls/2"
  */
	pull_request_url?: string;
	/**
  * @example
"480d4f47447129f015cb327536c522ca683939a1"
  */
	sha?: string;
	/**
  * @example
"commented"
  */
	state?: string;
	/**
  * @example
"2020-07-09T00:17:51Z"
  */
	submitted_at?: string;
	/**
  * @example
"2020-07-09T00:17:36Z"
  */
	updated_at?: string;
	url?: string;
}
