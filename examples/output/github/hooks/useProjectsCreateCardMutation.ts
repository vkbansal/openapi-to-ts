/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseProjectsCreateCardMutationPathParams {
	column_id: number;
}

export interface UseProjectsCreateCardMutationRequestBody {}

export interface UseProjectsCreateCardMutationProps
	extends UseProjectsCreateCardMutationPathParams {
	body: UseProjectsCreateCardMutationRequestBody;
}

/**
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
 *
 * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 */

export function useProjectsCreateCardMutation(props: UseProjectsCreateCardMutationProps) {
	return useMutation(() => Promise.resolve());
}
