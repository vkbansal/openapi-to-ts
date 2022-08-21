import { TeamSimple } from '../schemas/TeamSimple';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Pull Request Review Request
 */
export interface PullRequestReviewRequest {
	teams: TeamSimple[];
	users: SimpleUser[];
}
