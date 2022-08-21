import { MinimalRepository } from '../schemas/MinimalRepository';
import { SimpleCommitStatus } from '../schemas/SimpleCommitStatus';
/**
 * Combined Commit Status
 */
export interface CombinedCommitStatus {
	/**
	 * @format uri
	 */
	commit_url: string;
	repository: MinimalRepository;
	sha: string;
	state: string;
	statuses: SimpleCommitStatus[];
	total_count: number;
	/**
	 * @format uri
	 */
	url: string;
}
