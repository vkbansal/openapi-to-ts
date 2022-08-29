/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface UploadFilePathParams {
	/**
	 * @format int64
	 */
	petId: number;
}

export interface UploadFileProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UploadFilePathParams {}

/**
 *
 */
export async function uploadFile(props: UploadFileProps) {
	const { petId, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/pet/${petId}/uploadImage`,
		method: 'POST',
		...rest,
	});
}
