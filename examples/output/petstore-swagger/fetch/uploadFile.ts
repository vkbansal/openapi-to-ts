export interface UploadFilePathParams {
	/**
	 * @format int64
	 */
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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
