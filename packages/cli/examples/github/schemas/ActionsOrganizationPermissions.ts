import { AllowedActions } from '../schemas/AllowedActions';
import { EnabledRepositories } from '../schemas/EnabledRepositories';
import { SelectedActionsUrl } from '../schemas/SelectedActionsUrl';

export interface ActionsOrganizationPermissions {
	allowed_actions: AllowedActions;
	enabled_repositories: EnabledRepositories;
	selected_actions_url?: SelectedActionsUrl;
	/**
	 * The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.
	 */
	selected_repositories_url?: string;
}
