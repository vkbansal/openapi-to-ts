/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
/**
 * Org Hook
 */
export interface OrgHook {
	/**
	 * @example true
	 */
	active: boolean;
	config: {
		/**
		 * @example "form"
		 */
		content_type?: string;
		/**
		 * @example "0"
		 */
		insecure_ssl?: string;
		/**
		 * @example "********"
		 */
		secret?: string;
		/**
		 * @example "http://example.com/2"
		 */
		url?: string;
	};
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	created_at: string;
	/**
	 * @example push,pull_request
	 */
	events: string[];
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * @example web
	 */
	name: string;
	/**
	 * @format uri
	 * @example https://api.github.com/orgs/octocat/hooks/1/pings
	 */
	ping_url: string;
	type: string;
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	updated_at: string;
	/**
	 * @format uri
	 * @example https://api.github.com/orgs/octocat/hooks/1
	 */
	url: string;
}
