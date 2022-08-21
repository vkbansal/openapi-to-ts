import { MinimalRepository } from '../schemas/MinimalRepository';
import { SearchResultTextMatches } from '../schemas/SearchResultTextMatches';
/**
 * Code Search Result Item
 */
export interface CodeSearchResultItem {
	file_size?: number;
	/**
	 * @format uri
	 */
	git_url: string;
	/**
	 * @format uri
	 */
	html_url: string;
	language?: string | null;
	/**
	 * @format date-time
	 */
	last_modified_at?: string;
	/**
  * @example
73..77,77..78
  */
	line_numbers?: string[];
	name: string;
	path: string;
	repository: MinimalRepository;
	score: number;
	sha: string;
	text_matches?: SearchResultTextMatches;
	/**
	 * @format uri
	 */
	url: string;
}
