import { useQuery } from '@tanstack/react-query';

export interface AppsGetBySlugPathParams {
	app_slug: string;
}

export interface UseAppsGetBySlugQueryProps extends AppsGetBySlugPathParams {}

export function useAppsGetBySlugQuery(props: UseAppsGetBySlugQueryProps) {
	const { app_slug } = props;

	return useQuery(['apps/get-by-slug', app_slug]);
}
