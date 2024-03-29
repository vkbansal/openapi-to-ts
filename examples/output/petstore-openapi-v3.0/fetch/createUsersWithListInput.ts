/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface CreateUsersWithListInputRequestBody {}

export interface CreateUsersWithListInputProps extends Omit<RequestInit, 'method' | 'body'> {
	body: CreateUsersWithListInputRequestBody;
}

/**
 * Creates list of users with given input array
 */
export async function createUsersWithListInput(props: CreateUsersWithListInputProps) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, CreateUsersWithListInputRequestBody>({
		path: `/user/createWithList`,
		method: 'POST',
		...rest,
	});
}
