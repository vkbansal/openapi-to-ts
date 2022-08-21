import { ScopedInstallation } from '../schemas/ScopedInstallation';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 */
export interface Authorization {
	app: {
		client_id: string;
		name: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	/**
	 * @format date-time
	 */
	created_at: string;
	fingerprint: string | null;
	hashed_token: string | null;
	id: number;
	installation?: ScopedInstallation | null;
	note: string | null;
	/**
	 * @format uri
	 */
	note_url: string | null;
	/**
	 * A list of scopes that this authorization is in.
	 */
	scopes: string[] | null;
	token: string;
	token_last_eight: string | null;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * @format uri
	 */
	url: string;
	user?: SimpleUser | null;
}
