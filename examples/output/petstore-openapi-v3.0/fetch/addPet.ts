export type AddPetRequestBody = Pet;

export interface AddPetProps extends Omit<RequestInit, 'method' | 'body'> {
	body: AddPetRequestBody;
}

export async function addPet(props: AddPetProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/pet`, {
		method: 'POST',
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
