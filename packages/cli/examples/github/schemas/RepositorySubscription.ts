/**
 * Repository invitations let you manage who you collaborate with.
 */
export interface RepositorySubscription {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
	 * Determines if all notifications should be blocked from this repository.
	 */
	ignored: boolean;
	reason: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example
  */
	repository_url: string;
	/**
  * Determines if notifications should be received from this repository.
  * @example
true
  */
	subscribed: boolean;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example/subscription
  */
	url: string;
}
