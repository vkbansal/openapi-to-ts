export interface ScimEnterpriseUser {
	active?: boolean;
	emails?: Array<{
		primary?: boolean;
		type?: string;
		value?: string;
	}>;
	externalId?: string;
	groups?: Array<{
		value?: string;
	}>;
	id: string;
	meta?: {
		created?: string;
		lastModified?: string;
		location?: string;
		resourceType?: string;
	};
	name?: {
		familyName?: string;
		givenName?: string;
	};
	schemas: string[];
	userName?: string;
}
