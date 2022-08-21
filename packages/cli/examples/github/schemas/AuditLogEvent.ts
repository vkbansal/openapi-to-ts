export interface AuditLogEvent {
	/**
	 * The time the audit log event occurred, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
	 */
	'@timestamp'?: number;
	/**
	 * The name of the action that was performed, for example `user.login` or `repo.create`.
	 */
	action?: string;
	active?: boolean;
	active_was?: boolean;
	/**
	 * The actor who performed the action.
	 */
	actor?: string;
	/**
	 * The username of the account being blocked.
	 */
	blocked_user?: string;
	business?: string;
	config?: Array<{}>;
	config_was?: Array<{}>;
	content_type?: string;
	/**
	 * The time the audit log event was recorded, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
	 */
	created_at?: number;
	deploy_key_fingerprint?: string;
	emoji?: string;
	events?: Array<{}>;
	events_were?: Array<{}>;
	explanation?: string;
	fingerprint?: string;
	hook_id?: number;
	limited_availability?: boolean;
	message?: string;
	name?: string;
	old_user?: string;
	openssh_public_key?: string;
	org?: string;
	previous_visibility?: string;
	read_only?: boolean;
	/**
	 * The name of the repository.
	 */
	repo?: string;
	/**
	 * The name of the repository.
	 */
	repository?: string;
	repository_public?: boolean;
	target_login?: string;
	team?: string;
	/**
	 * The type of protocol (for example, HTTP or SSH) used to transfer Git data.
	 */
	transport_protocol?: number;
	/**
	 * A human readable name for the protocol (for example, HTTP or SSH) used to transfer Git data.
	 */
	transport_protocol_name?: string;
	/**
	 * The user that was affected by the action performed (if available).
	 */
	user?: string;
	/**
	 * The repository visibility, for example `public` or `private`.
	 */
	visibility?: string;
}
