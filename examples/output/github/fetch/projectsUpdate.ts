export interface ProjectsUpdatePathParams {
	project_id: number;
}

export interface ProjectsUpdateRequestBody {
	/**
	 * Body of the project
	 * @example "This project represents the sprint of the first week in January"
	 */
	body?: string | null;
	/**
	 * Name of the project
	 * @example "Week One Sprint"
	 */
	name?: string;
	/**
	 * The baseline permission that all organization members have on this project
	 */
	organization_permission?: 'admin' | 'none' | 'read' | 'write';
	/**
	 * Whether or not this project can be seen by everyone.
	 */
	private?: boolean;
	/**
	 * State of the project; either 'open' or 'closed'
	 * @example "open"
	 */
	state?: string;
}

export interface ProjectsUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsUpdatePathParams {
	body: ProjectsUpdateRequestBody;
}

export async function projectsUpdate(props: ProjectsUpdateProps) {
	const { project_id, body, ...rest } = props;

	const response = await fetch(`/projects/${project_id}`, {
		method: 'PATCH',
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
