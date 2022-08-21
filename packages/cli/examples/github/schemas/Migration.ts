import { SimpleUser } from '../schemas/SimpleUser';
import { Repository } from '../schemas/Repository';
/**
 * A migration.
 */
export interface Migration {
	/**
	 * @format uri
	 */
	archive_url?: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	exclude?: Array<{}>;
	exclude_attachments: boolean;
	/**
  * @example
0b989ba4-242f-11e5-81e1-c7b6966d2516
  */
	guid: string;
	/**
  * @example
79
  */
	id: number;
	/**
  * @example
true
  */
	lock_repositories: boolean;
	node_id: string;
	owner: SimpleUser | null;
	repositories: Repository[];
	/**
  * @example
pending
  */
	state: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/octo-org/migrations/79
  */
	url: string;
}
