import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Stargazer
 */
export interface Stargazer {
	/**
	 * @format date-time
	 */
	starred_at: string;
	user: SimpleUser | null;
}
