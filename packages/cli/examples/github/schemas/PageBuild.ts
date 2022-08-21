import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Page Build
 */
export interface PageBuild {
	commit: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	duration: number;
	error: {
		message: string | null;
	};
	pusher: SimpleUser | null;
	status: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * @format uri
	 */
	url: string;
}
