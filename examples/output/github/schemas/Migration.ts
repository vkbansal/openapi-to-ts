/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { SimpleUser } from '../schemas/SimpleUser';
import type { Repository } from '../schemas/Repository';

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
	 * @example "2015-07-06T15:33:38-07:00"
	 */
	created_at: string;
	exclude?: Array<{}>;
	exclude_attachments: boolean;
	/**
	 * @example "0b989ba4-242f-11e5-81e1-c7b6966d2516"
	 */
	guid: string;
	/**
	 * @example 79
	 */
	id: number;
	/**
	 * @example true
	 */
	lock_repositories: boolean;
	node_id: string;
	owner: SimpleUser | null;
	repositories: Repository[];
	/**
	 * @example "pending"
	 */
	state: string;
	/**
	 * @format date-time
	 * @example "2015-07-06T15:33:38-07:00"
	 */
	updated_at: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/orgs/octo-org/migrations/79"
	 */
	url: string;
}
