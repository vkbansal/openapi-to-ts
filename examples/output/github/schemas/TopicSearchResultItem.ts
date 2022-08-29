/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { SearchResultTextMatches } from '../schemas/SearchResultTextMatches';

/**
 * Topic Search Result Item
 */
export interface TopicSearchResultItem {
	aliases?: Array<{
		topic_relation?: {
			id?: number;
			name?: string;
			relation_type?: string;
			topic_id?: number;
		};
	}> | null;
	/**
	 * @format date-time
	 */
	created_at: string;
	created_by: string | null;
	curated: boolean;
	description: string | null;
	display_name: string | null;
	featured: boolean;
	/**
	 * @format uri
	 */
	logo_url?: string | null;
	name: string;
	related?: Array<{
		topic_relation?: {
			id?: number;
			name?: string;
			relation_type?: string;
			topic_id?: number;
		};
	}> | null;
	released: string | null;
	repository_count?: number | null;
	score: number;
	short_description: string | null;
	text_matches?: SearchResultTextMatches;
	/**
	 * @format date-time
	 */
	updated_at: string;
}
