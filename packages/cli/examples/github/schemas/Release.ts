import { ReleaseAsset } from '../schemas/ReleaseAsset';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * A release.
 */
export interface Release {
	assets: ReleaseAsset[];
	/**
	 * @format uri
	 */
	assets_url: string;
	author: SimpleUser;
	body?: string | null;
	body_html?: string;
	body_text?: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
	 * true to create a draft (unpublished) release, false to create a published one.
	 */
	draft: boolean;
	/**
	 * @format uri
	 */
	html_url: string;
	id: number;
	name: string | null;
	node_id: string;
	/**
	 * Whether to identify the release as a prerelease or a full release.
	 */
	prerelease: boolean;
	/**
	 * @format date-time
	 */
	published_at: string | null;
	/**
  * The name of the tag.
  * @example
v1.0.0
  */
	tag_name: string;
	/**
	 * @format uri
	 */
	tarball_url: string | null;
	/**
  * Specifies the commitish value that determines where the Git tag is created from.
  * @example
master
  */
	target_commitish: string;
	upload_url: string;
	/**
	 * @format uri
	 */
	url: string;
	/**
	 * @format uri
	 */
	zipball_url: string | null;
}
