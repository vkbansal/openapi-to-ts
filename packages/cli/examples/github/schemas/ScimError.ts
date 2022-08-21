/**
 * Scim Error
 */
export interface ScimError {
	detail?: string | null;
	documentation_url?: string | null;
	message?: string | null;
	schemas?: string[];
	scimType?: string | null;
	status?: number;
}
