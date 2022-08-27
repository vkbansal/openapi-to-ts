export interface ProjectsGetColumnPathParams {
	column_id: number;
}

export interface ProjectsGetColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsGetColumnPathParams {}

export async function projectsGetColumn(props: ProjectsGetColumnProps) {
	const { column_id, ...rest } = props;

	const response = await fetch(`/projects/columns/${column_id}`, {
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
