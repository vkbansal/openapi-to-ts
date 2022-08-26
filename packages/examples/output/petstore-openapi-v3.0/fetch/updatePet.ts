export interface UpdatePetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function updatePet(props: UpdatePetProps) {
	const { ...rest } = props;

	const response = await fetch(`/pet`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}