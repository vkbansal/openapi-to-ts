export interface ProjectsDeleteCardPathParams {
	card_id: number;
}

export interface ProjectsDeleteCardProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsDeleteCardPathParams {}

export async function projectsDeleteCard(props: ProjectsDeleteCardProps) {
	const { card_id, ...rest } = props;

	const response = await fetch(`/projects/columns/cards/${card_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
