/**
 * Api Overview
 */
export interface ApiOverview {
	/**
  * @example
13.64.0.0/16,13.65.0.0/16
  */
	actions?: string[];
	/**
  * @example
127.0.0.1/32
  */
	api?: string[];
	/**
  * @example
127.0.0.1/32
  */
	git?: string[];
	/**
  * @example
127.0.0.1/32
  */
	hooks?: string[];
	/**
  * @example
54.158.161.132,54.226.70.38
  */
	importer?: string[];
	/**
  * @example
192.30.252.153/32,192.30.252.154/32
  */
	pages?: string[];
	ssh_key_fingerprints?: {
		SHA256_DSA?: string;
		SHA256_RSA?: string;
	};
	/**
  * @example
true
  */
	verifiable_password_authentication: boolean;
	/**
  * @example
127.0.0.1/32
  */
	web?: string[];
}
