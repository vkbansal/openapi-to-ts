/**
  * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
  * @example
"********"
  */
export type WebhookConfigSecret = string;
