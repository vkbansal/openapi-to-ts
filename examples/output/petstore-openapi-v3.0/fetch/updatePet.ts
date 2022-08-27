export type UpdatePetRequestBody = Pet;

export interface UpdatePetProps extends Omit<RequestInit, 'method' | 'body'> {
	body: UpdatePetRequestBody;
}

export async function updatePet(props: UpdatePetProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/pet`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
