/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
/**
 * Thread Subscription
 */
export interface ThreadSubscription {
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	created_at: string | null;
	ignored: boolean;
	reason: string | null;
	/**
	 * @format uri
	 * @example https://api.github.com/repos/1
	 */
	repository_url?: string;
	/**
	 * @example true
	 */
	subscribed: boolean;
	/**
	 * @format uri
	 * @example https://api.github.com/notifications/threads/1
	 */
	thread_url?: string;
	/**
	 * @format uri
	 * @example https://api.github.com/notifications/threads/1/subscription
	 */
	url: string;
}
