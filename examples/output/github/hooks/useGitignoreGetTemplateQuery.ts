import { useQuery } from '@tanstack/react-query';

export interface GitignoreGetTemplatePathParams {
	name: string;
}

export interface UseGitignoreGetTemplateQueryProps extends GitignoreGetTemplatePathParams {}

export function useGitignoreGetTemplateQuery(props: UseGitignoreGetTemplateQueryProps) {
	const { name } = props;

	return useQuery(['gitignore/get-template', name]);
}
