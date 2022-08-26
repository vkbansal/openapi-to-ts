export interface GetPetByIdPathParams {
	petId: number;
}

export interface GetPetByIdProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GetPetByIdPathParams {}

export async function getPetById(props: GetPetByIdProps) {
	const { petId, ...rest } = props;

	const response = await fetch(`/pet/${petId}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
