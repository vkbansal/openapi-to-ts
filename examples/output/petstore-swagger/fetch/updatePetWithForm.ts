export interface UpdatePetWithFormPathParams {
	/**
	 * @format int64
	 */
	petId: number;
}

export interface UpdatePetWithFormProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UpdatePetWithFormPathParams {}

export async function updatePetWithForm(props: UpdatePetWithFormProps) {
	const { petId, ...rest } = props;

	const response = await fetch(`/pet/${petId}`, {
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
