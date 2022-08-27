export interface ActivityGetFeedsProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function activityGetFeeds(props: ActivityGetFeedsProps) {
	const { ...rest } = props;

	const response = await fetch(`/feeds`, {
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
