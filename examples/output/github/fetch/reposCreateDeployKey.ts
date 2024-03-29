/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposCreateDeployKeyPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateDeployKeyRequestBody {
	/**
	 * The contents of the key.
	 */
	key: string;
	/**
	 * If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
	 *
	 * Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://help.github.com/articles/permission-levels-for-a-user-account-repository/)."
	 */
	read_only?: boolean;
	/**
	 * A name for the key.
	 */
	title?: string;
}

export interface ReposCreateDeployKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateDeployKeyPathParams {
	body: ReposCreateDeployKeyRequestBody;
}

/**
 * You can create a read-only deploy key.
 */
export async function reposCreateDeployKey(props: ReposCreateDeployKeyProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, ReposCreateDeployKeyRequestBody>({
		path: `/repos/${owner}/${repo}/keys`,
		method: 'POST',
		...rest,
	});
}
