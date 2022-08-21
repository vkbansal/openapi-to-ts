import { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';
/**
 * Configuration object of the webhook
 */
export interface WebhookConfig {
	content_type?: WebhookConfigContentType;
	insecure_ssl?: WebhookConfigInsecureSsl;
	secret?: WebhookConfigSecret;
	url?: WebhookConfigUrl;
}
