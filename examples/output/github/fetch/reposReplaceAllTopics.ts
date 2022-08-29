/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposReplaceAllTopicsPathParams {
	owner: string;
	repo: string;
}

export interface ReposReplaceAllTopicsRequestBody {
	/**
	 * An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
	 */
	names: string[];
}

export interface ReposReplaceAllTopicsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposReplaceAllTopicsPathParams {
	body: ReposReplaceAllTopicsRequestBody;
}

/**
 *
 */
export async function reposReplaceAllTopics(props: ReposReplaceAllTopicsProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, ReposReplaceAllTopicsRequestBody>({
		path: `/repos/${owner}/${repo}/topics`,
		method: 'PUT',
		...rest,
	});
}
