/**
 * Thread Subscription
 */
export interface ThreadSubscription {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string | null;
	ignored: boolean;
	reason: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/1
  */
	repository_url?: string;
	/**
  * @example
true
  */
	subscribed: boolean;
	/**
  * @format uri
  * @example
https://api.github.com/notifications/threads/1
  */
	thread_url?: string;
	/**
  * @format uri
  * @example
https://api.github.com/notifications/threads/1/subscription
  */
	url: string;
}
