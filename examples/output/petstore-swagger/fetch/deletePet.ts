export interface DeletePetPathParams {
	petId: number;
}

export interface DeletePetProps extends Omit<RequestInit, 'method' | 'body'>, DeletePetPathParams {}

export async function deletePet(props: DeletePetProps) {
	const { petId, ...rest } = props;

	const response = await fetch(`/pet/${petId}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}
