export interface ScimGroupListEnterprise {
	Resources: Array<{
		displayName?: string;
		externalId?: string | null;
		id: string;
		members?: Array<{
			$ref?: string;
			display?: string;
			value?: string;
		}>;
		meta?: {
			created?: string;
			lastModified?: string;
			location?: string;
			resourceType?: string;
		};
		schemas: string[];
	}>;
	itemsPerPage: number;
	schemas: string[];
	startIndex: number;
	totalResults: number;
}
