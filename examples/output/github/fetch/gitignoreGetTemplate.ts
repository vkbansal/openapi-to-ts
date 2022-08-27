export interface GitignoreGetTemplatePathParams {
	name: string;
}

export interface GitignoreGetTemplateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitignoreGetTemplatePathParams {}

export async function gitignoreGetTemplate(props: GitignoreGetTemplateProps) {
	const { name, ...rest } = props;

	const response = await fetch(`/gitignore/templates/${name}`, {
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
