/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UploadFilePathParams {
	petId: number;
}

export interface UploadFileProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UploadFilePathParams {}

export async function uploadFile(props: UploadFileProps) {
	const { petId, ...rest } = props;

	const response = await fetch(`/pet/${petId}/uploadImage`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
