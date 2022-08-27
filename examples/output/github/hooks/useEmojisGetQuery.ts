import { useQuery } from '@tanstack/react-query';
export interface UseEmojisGetQueryProps {}

export function useEmojisGetQuery(props: UseEmojisGetQueryProps) {
	const {} = props;

	return useQuery(['emojis/get']);
}
