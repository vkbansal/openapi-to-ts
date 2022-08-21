/**
 * Actor
 */
export interface Actor {
	/**
	 * @format uri
	 */
	avatar_url: string;
	display_login?: string;
	gravatar_id: string | null;
	id: number;
	login: string;
	/**
	 * @format uri
	 */
	url: string;
}
