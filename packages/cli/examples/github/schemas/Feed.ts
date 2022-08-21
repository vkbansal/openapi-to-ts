import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
import { LinkWithType } from '../schemas/LinkWithType';
/**
 * Feed
 */
export interface Feed {
	_links: {
		current_user?: LinkWithType;
		current_user_actor?: LinkWithType;
		current_user_organization?: LinkWithType;
		current_user_organizations?: LinkWithType[];
		current_user_public?: LinkWithType;
		security_advisories?: LinkWithType;
		timeline: LinkWithType;
		user: LinkWithType;
	};
	/**
  * @example
https://github.com/octocat.private.actor?token=abc123
  */
	current_user_actor_url?: string;
	/**
  * @example
https://github.com/octocat-org
  */
	current_user_organization_url?: string;
	/**
  * @example
https://github.com/organizations/github/octocat.private.atom?token=abc123
  */
	current_user_organization_urls?: string[];
	/**
  * @example
https://github.com/octocat
  */
	current_user_public_url?: string;
	/**
  * @example
https://github.com/octocat.private?token=abc123
  */
	current_user_url?: string;
	/**
  * @example
https://github.com/security-advisories
  */
	security_advisories_url?: string;
	/**
  * @example
https://github.com/timeline
  */
	timeline_url: string;
	/**
  * @example
https://github.com/{user}
  */
	user_url: string;
}
