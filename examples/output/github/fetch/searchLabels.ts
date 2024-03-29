/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface SearchLabelsQueryParams {
	repository_id: number;
	q: string;
	sort?: 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
}

export interface SearchLabelsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchLabelsQueryParams;
	paramsSerializer?: (params: SearchLabelsQueryParams) => string;
}

/**
 * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 *
 * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 *
 * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
 *
 * `q=bug+defect+enhancement&repository_id=64778136`
 *
 * The labels that best match the query appear first in the search results.
 */
export async function searchLabels(props: SearchLabelsProps) {
	const { ...rest } = props;

	return _fetcher<unknown, SearchLabelsQueryParams, unknown>({
		path: `/search/labels`,
		method: 'GET',
		...rest,
	});
}
