/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { Pet } from '../schemas/Pet';

import { fetcher as _fetcher } from './fetcher';

export type UpdatePetRequestBody = Pet;

export interface UpdatePetProps extends Omit<RequestInit, 'method' | 'body'> {
	body: UpdatePetRequestBody;
}

/**
 * Update an existing pet by Id
 */
export async function updatePet(props: UpdatePetProps) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, UpdatePetRequestBody>({
		path: `/pet`,
		method: 'PUT',
		...rest,
	});
}
