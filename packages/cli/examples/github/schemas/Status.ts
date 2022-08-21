import { SimpleUser } from '../schemas/SimpleUser';
/**
 * The status of a commit.
 */
export interface Status {
	avatar_url: string | null;
	context: string;
	created_at: string;
	creator: SimpleUser;
	description: string;
	id: number;
	node_id: string;
	state: string;
	target_url: string;
	updated_at: string;
	url: string;
}
