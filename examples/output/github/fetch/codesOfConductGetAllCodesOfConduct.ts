/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface CodesOfConductGetAllCodesOfConductProps
	extends Omit<RequestInit, 'method' | 'body'> {}

/**
 *
 */
export async function codesOfConductGetAllCodesOfConduct(
	props: CodesOfConductGetAllCodesOfConductProps,
) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/codes_of_conduct`,
		method: 'GET',
		...rest,
	});
}
