export interface FindPetsByTagsQueryParams {
	tags: string[];
}

export interface FindPetsByTagsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: FindPetsByTagsQueryParams;
}

export async function findPetsByTags(props: FindPetsByTagsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/pet/findByTags`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}