import { MinimalRepository } from '../schemas/MinimalRepository';
/**
 * Thread
 */
export interface Thread {
	id: string;
	last_read_at: string | null;
	reason: string;
	repository: MinimalRepository;
	subject: {
		latest_comment_url: string;
		title: string;
		type: string;
		url: string;
	};
	/**
  * @example
https://api.github.com/notifications/threads/2/subscription
  */
	subscription_url: string;
	unread: boolean;
	updated_at: string;
	url: string;
}
