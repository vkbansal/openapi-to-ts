/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface FindPetsByStatusQueryParams {
	/**
	 * @default "available"
	 */
	status?: 'available' | 'pending' | 'sold';
}

export interface FindPetsByStatusProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: FindPetsByStatusQueryParams;
	paramsSerializer?: (params: FindPetsByStatusQueryParams) => string;
}

/**
 * Multiple status values can be provided with comma separated strings
 */
export async function findPetsByStatus(props: FindPetsByStatusProps) {
	const { ...rest } = props;

	return _fetcher<unknown, FindPetsByStatusQueryParams, unknown>({
		path: `/pet/findByStatus`,
		method: 'GET',
		...rest,
	});
}
