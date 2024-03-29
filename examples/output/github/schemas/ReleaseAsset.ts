/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { SimpleUser } from '../schemas/SimpleUser';

/**
 * Data related to a release.
 */
export interface ReleaseAsset {
	/**
	 * @format uri
	 */
	browser_download_url: string;
	content_type: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	download_count: number;
	id: number;
	label: string | null;
	/**
	 * The file name of the asset.
	 * @example "Team Environment"
	 */
	name: string;
	node_id: string;
	size: number;
	/**
	 * State of the release asset.
	 */
	state: 'open' | 'uploaded';
	/**
	 * @format date-time
	 */
	updated_at: string;
	uploader: SimpleUser | null;
	/**
	 * @format uri
	 */
	url: string;
}
