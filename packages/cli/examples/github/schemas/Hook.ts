import { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';
import { HookResponse } from '../schemas/HookResponse';
/**
 * Webhooks for repositories.
 */
export interface Hook {
	/**
  * Determines whether the hook is actually triggered on pushes.
  * @example
true
  */
	active: boolean;
	config: {
		content_type?: WebhookConfigContentType;
		/**
  * @example
"sha256"
  */
		digest?: string;
		/**
  * @example
"foo@bar.com"
  */
		email?: string;
		insecure_ssl?: WebhookConfigInsecureSsl;
		/**
  * @example
"foo"
  */
		password?: string;
		/**
  * @example
"roomer"
  */
		room?: string;
		secret?: WebhookConfigSecret;
		/**
  * @example
"foo"
  */
		subdomain?: string;
		/**
  * @example
"abc"
  */
		token?: string;
		url?: WebhookConfigUrl;
	};
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * Determines what events the hook is triggered for. Default: ['push'].
  * @example
push,pull_request
  */
	events: string[];
	/**
  * Unique identifier of the webhook.
  * @example
42
  */
	id: number;
	last_response: HookResponse;
	/**
  * The name of a valid service, use 'web' for a webhook.
  * @example
web
  */
	name: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/hooks/1/pings
  */
	ping_url: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/hooks/1/test
  */
	test_url: string;
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
https://api.github.com/repos/octocat/Hello-World/hooks/1
  */
	url: string;
}
