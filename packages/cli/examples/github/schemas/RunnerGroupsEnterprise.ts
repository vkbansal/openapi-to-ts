export interface RunnerGroupsEnterprise {
	allows_public_repositories: boolean;
	default: boolean;
	id: number;
	name: string;
	runners_url: string;
	selected_organizations_url?: string;
	visibility: string;
}
