/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsDeleteSelfHostedRunnerGroupFromOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams {}

/**
 * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 *
 * Deletes a self-hosted runner group for an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 */
export async function actionsDeleteSelfHostedRunnerGroupFromOrg(
	props: ActionsDeleteSelfHostedRunnerGroupFromOrgProps,
) {
	const { org, runner_group_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/actions/runner-groups/${runner_group_id}`,
		method: 'DELETE',
		...rest,
	});
}
