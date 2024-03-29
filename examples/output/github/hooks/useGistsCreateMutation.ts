/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseGistsCreateMutationRequestBody {
	/**
	 * Description of the gist
	 * @example "Example Ruby script"
	 */
	description?: string;
	/**
	 * Names and content for the files that make up the gist
	 * @example {"hello.rb":{"content":"puts \"Hello, World!\""}}
	 */
	files: {
		'[key: string]'?: {
			/**
			 * Content of the file
			 */
			content: string;
		};
	};
	public?: (boolean & 'false') | 'true';
}

export interface UseGistsCreateMutationProps {
	body: UseGistsCreateMutationRequestBody;
}

/**
 * Allows you to add a new gist with one or more files.
 *
 * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
 */

export function useGistsCreateMutation(props: UseGistsCreateMutationProps) {
	return useMutation(() => Promise.resolve());
}
