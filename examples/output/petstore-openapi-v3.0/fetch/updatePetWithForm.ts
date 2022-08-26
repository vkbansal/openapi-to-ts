export interface UpdatePetWithFormQueryParams {
	name?: string;
	status?: string;
}

export interface UpdatePetWithFormPathParams {
	petId: number;
}

export interface UpdatePetWithFormProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UpdatePetWithFormPathParams {
	queryParams: UpdatePetWithFormQueryParams;
}

export async function updatePetWithForm(props: UpdatePetWithFormProps) {
	const { petId, queryParams, ...rest } = props;

	const response = await fetch(`/pet/${petId}`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
