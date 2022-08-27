import { useQuery } from '@tanstack/react-query';
export interface UseGitignoreGetAllTemplatesQueryProps {}

export function useGitignoreGetAllTemplatesQuery(props: UseGitignoreGetAllTemplatesQueryProps) {
	const {} = props;

	return useQuery(['gitignore/get-all-templates']);
}
