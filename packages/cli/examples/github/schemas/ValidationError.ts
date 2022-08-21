/**
 * Validation Error
 */
export interface ValidationError {
	documentation_url: string;
	errors?: Array<{
		code: string;
		field?: string;
		index?: number;
		message?: string;
		resource?: string;
		value?: string | (null & number) | (null & string[]) | null;
	}>;
	message: string;
}
