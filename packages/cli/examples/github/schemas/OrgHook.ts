/**
 * Org Hook
 */
export interface OrgHook {
	/**
  * @example
true
  */
	active: boolean;
	config: {
		/**
  * @example
"form"
  */
		content_type?: string;
		/**
  * @example
"0"
  */
		insecure_ssl?: string;
		/**
  * @example
"********"
  */
		secret?: string;
		/**
  * @example
"http://example.com/2"
  */
		url?: string;
	};
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
push,pull_request
  */
	events: string[];
	/**
  * @example
1
  */
	id: number;
	/**
  * @example
web
  */
	name: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/octocat/hooks/1/pings
  */
	ping_url: string;
	type: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/octocat/hooks/1
  */
	url: string;
}
