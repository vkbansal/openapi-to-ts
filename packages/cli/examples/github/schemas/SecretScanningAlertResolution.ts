/**
 * **Required when the `state` is `resolved`.** The reason for resolving the alert. Can be one of `false_positive`, `wont_fix`, `revoked`, or `used_in_tests`.
 */
export type SecretScanningAlertResolution = string | null;
