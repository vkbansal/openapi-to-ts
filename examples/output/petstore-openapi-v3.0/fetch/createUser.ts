/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { User } from '../schemas/User';

import { fetcher as _fetcher } from './fetcher';

export type CreateUserRequestBody = User;

export interface CreateUserProps extends Omit<RequestInit, 'method' | 'body'> {
	body: CreateUserRequestBody;
}

/**
 * This can only be done by the logged in user.
 */
export async function createUser(props: CreateUserProps) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, CreateUserRequestBody>({
		path: `/user`,
		method: 'POST',
		...rest,
	});
}
