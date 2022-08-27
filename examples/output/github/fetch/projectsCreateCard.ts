export interface ProjectsCreateCardPathParams {
	column_id: number;
}

export interface ProjectsCreateCardRequestBody {}

export interface ProjectsCreateCardProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsCreateCardPathParams {
	body: ProjectsCreateCardRequestBody;
}

export async function projectsCreateCard(props: ProjectsCreateCardProps) {
	const { column_id, body, ...rest } = props;

	const response = await fetch(`/projects/columns/${column_id}/cards`, {
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
