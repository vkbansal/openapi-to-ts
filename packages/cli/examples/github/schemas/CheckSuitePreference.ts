import { Repository } from '../schemas/Repository';
/**
 * Check suite configuration preferences for a repository.
 */
export interface CheckSuitePreference {
	preferences: {
		auto_trigger_checks?: Array<{
			app_id: number;
			setting: boolean;
		}>;
	};
	repository: Repository;
}
