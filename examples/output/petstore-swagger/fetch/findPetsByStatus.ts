export interface FindPetsByStatusQueryParams {
	status: Array<'available' | 'pending' | 'sold'>;
}

export interface FindPetsByStatusProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: FindPetsByStatusQueryParams;
}

export async function findPetsByStatus(props: FindPetsByStatusProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/pet/findByStatus`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
