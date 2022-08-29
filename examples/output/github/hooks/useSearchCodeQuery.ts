/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseSearchCodeQueryQueryParams {
	q: string;
	sort?: 'indexed';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseSearchCodeQueryProps {
	queryParams: UseSearchCodeQueryQueryParams;
}

/**
 * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 *
 * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 *
 * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
 *
 * `q=addClass+in:file+language:js+repo:jquery/jquery`
 *
 * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
 *
 * #### Considerations for code search
 *
 * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
 *
 * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
 * *   Only files smaller than 384 KB are searchable.
 * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
 * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
 */

export function useSearchCodeQuery(props: UseSearchCodeQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/code', queryParams]);
}
