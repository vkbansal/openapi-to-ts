import { SimpleUser } from '../schemas/SimpleUser';
import { Repository } from '../schemas/Repository';
/**
 * Minimal Repository
 */
export interface MinimalRepository {
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}
  */
	archive_url: string;
	archived?: boolean;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/assignees{/user}
  */
	assignees_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}
  */
	blobs_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/branches{/branch}
  */
	branches_url: string;
	clone_url?: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}
  */
	collaborators_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/comments{/number}
  */
	comments_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/commits{/sha}
  */
	commits_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}
  */
	compare_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/contents/{+path}
  */
	contents_url: string;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/contributors
  */
	contributors_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at?: string | null;
	default_branch?: string;
	delete_branch_on_merge?: boolean;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/deployments
  */
	deployments_url: string;
	/**
  * @example
This your first repo!
  */
	description: string | null;
	disabled?: boolean;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/downloads
  */
	downloads_url: string;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/events
  */
	events_url: string;
	fork: boolean;
	forks?: number;
	forks_count?: number;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/forks
  */
	forks_url: string;
	/**
  * @example
octocat/Hello-World
  */
	full_name: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}
  */
	git_commits_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}
  */
	git_refs_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}
  */
	git_tags_url: string;
	git_url?: string;
	has_downloads?: boolean;
	has_issues?: boolean;
	has_pages?: boolean;
	has_projects?: boolean;
	has_wiki?: boolean;
	homepage?: string | null;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/hooks
  */
	hooks_url: string;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World
  */
	html_url: string;
	/**
  * @example
1296269
  */
	id: number;
	is_template?: boolean;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}
  */
	issue_comment_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/issues/events{/number}
  */
	issue_events_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/issues{/number}
  */
	issues_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/keys{/key_id}
  */
	keys_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/labels{/name}
  */
	labels_url: string;
	language?: string | null;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/languages
  */
	languages_url: string;
	license?: {
		key?: string;
		name?: string;
		node_id?: string;
		spdx_id?: string;
		url?: string;
	} | null;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/merges
  */
	merges_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/milestones{/number}
  */
	milestones_url: string;
	mirror_url?: string | null;
	/**
  * @example
Hello-World
  */
	name: string;
	network_count?: number;
	/**
  * @example
MDEwOlJlcG9zaXRvcnkxMjk2MjY5
  */
	node_id: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}
  */
	notifications_url: string;
	open_issues?: number;
	open_issues_count?: number;
	owner: SimpleUser | null;
	permissions?: {
		admin?: boolean;
		pull?: boolean;
		push?: boolean;
	};
	private: boolean;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/pulls{/number}
  */
	pulls_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	pushed_at?: string | null;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/releases{/id}
  */
	releases_url: string;
	size?: number;
	ssh_url?: string;
	stargazers_count?: number;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/stargazers
  */
	stargazers_url: string;
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/statuses/{sha}
  */
	statuses_url: string;
	subscribers_count?: number;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/subscribers
  */
	subscribers_url: string;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/subscription
  */
	subscription_url: string;
	svn_url?: string;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/tags
  */
	tags_url: string;
	/**
  * @format uri
  * @example
http://api.github.com/repos/octocat/Hello-World/teams
  */
	teams_url: string;
	temp_clone_token?: string;
	template_repository?: Repository | null;
	topics?: string[];
	/**
  * @example
http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}
  */
	trees_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at?: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World
  */
	url: string;
	visibility?: string;
	watchers?: number;
	watchers_count?: number;
}
