import { Repository } from '../schemas/Repository';
/**
 * Starred Repository
 */
export interface StarredRepository {
	repo: Repository;
	/**
	 * @format date-time
	 */
	starred_at: string;
}
