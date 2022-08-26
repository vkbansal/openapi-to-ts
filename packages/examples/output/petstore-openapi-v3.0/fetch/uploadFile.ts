export interface UploadFileQueryParams {
	additionalMetadata?: string;
}

export interface UploadFilePathParams {
	petId: number;
}

export interface UploadFileProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UploadFilePathParams {
	queryParams: UploadFileQueryParams;
}

export async function uploadFile(props: UploadFileProps) {
	const { petId, queryParams, ...rest } = props;

	const response = await fetch(`/pet/${petId}/uploadImage`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
