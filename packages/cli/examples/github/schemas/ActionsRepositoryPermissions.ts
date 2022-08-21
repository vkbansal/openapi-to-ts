import { AllowedActions } from '../schemas/AllowedActions';
import { ActionsEnabled } from '../schemas/ActionsEnabled';
import { SelectedActionsUrl } from '../schemas/SelectedActionsUrl';

export interface ActionsRepositoryPermissions {
	allowed_actions: AllowedActions;
	enabled: ActionsEnabled;
	selected_actions_url?: SelectedActionsUrl;
}
