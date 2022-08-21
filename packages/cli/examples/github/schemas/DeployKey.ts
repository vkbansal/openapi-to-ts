/**
 * An SSH key granting access to a single repository.
 */
export interface DeployKey {
	created_at: string;
	id: number;
	key: string;
	read_only: boolean;
	title: string;
	url: string;
	verified: boolean;
}
