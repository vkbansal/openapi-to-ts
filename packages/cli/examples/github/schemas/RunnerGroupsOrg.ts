export interface RunnerGroupsOrg {
	allows_public_repositories: boolean;
	default: boolean;
	id: number;
	inherited: boolean;
	inherited_allows_public_repositories?: boolean;
	name: string;
	runners_url: string;
	/**
	 * Link to the selected repositories resource for this runner group. Not present unless visibility was set to `selected`
	 */
	selected_repositories_url?: string;
	visibility: string;
}
