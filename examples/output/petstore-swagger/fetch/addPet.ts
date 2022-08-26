export interface AddPetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function addPet(props: AddPetProps) {
	const { ...rest } = props;

	const response = await fetch(`/pet`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
