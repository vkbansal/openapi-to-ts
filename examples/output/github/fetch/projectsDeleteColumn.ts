export interface ProjectsDeleteColumnPathParams {
	column_id: number;
}

export interface ProjectsDeleteColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsDeleteColumnPathParams {}

export async function projectsDeleteColumn(props: ProjectsDeleteColumnProps) {
	const { column_id, ...rest } = props;

	const response = await fetch(`/projects/columns/${column_id}`, {
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
