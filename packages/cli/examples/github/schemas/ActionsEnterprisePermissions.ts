import { AllowedActions } from '../schemas/AllowedActions';
import { EnabledOrganizations } from '../schemas/EnabledOrganizations';
import { SelectedActionsUrl } from '../schemas/SelectedActionsUrl';

export interface ActionsEnterprisePermissions {
	allowed_actions: AllowedActions;
	enabled_organizations: EnabledOrganizations;
	selected_actions_url?: SelectedActionsUrl;
	/**
	 * The API URL to use to get or set the selected organizations that are allowed to run GitHub Actions, when `enabled_organizations` is set to `selected`.
	 */
	selected_organizations_url?: string;
}
