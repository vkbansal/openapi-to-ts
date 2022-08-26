export interface GetInventoryProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function getInventory(props: GetInventoryProps) {
	const { ...rest } = props;

	const response = await fetch(`/store/inventory`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
