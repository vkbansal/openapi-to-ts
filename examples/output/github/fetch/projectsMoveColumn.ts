export interface ProjectsMoveColumnPathParams {
	column_id: number;
}

export interface ProjectsMoveColumnRequestBody {
	/**
	 * The position of the column in a project
	 * @example "last"
	 */
	position: string;
}

export interface ProjectsMoveColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsMoveColumnPathParams {
	body: ProjectsMoveColumnRequestBody;
}

export async function projectsMoveColumn(props: ProjectsMoveColumnProps) {
	const { column_id, body, ...rest } = props;

	const response = await fetch(`/projects/columns/${column_id}/moves`, {
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
