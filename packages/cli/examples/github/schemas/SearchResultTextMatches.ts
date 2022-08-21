export type SearchResultTextMatches = Array<{
	fragment?: string;
	matches?: Array<{
		indices?: number[];
		text?: string;
	}>;
	object_type?: string | null;
	object_url?: string;
	property?: string;
}>;
