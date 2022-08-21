/**
 * Check Annotation
 */
export interface CheckAnnotation {
	/**
  * @example
warning
  */
	annotation_level: string | null;
	blob_href: string;
	/**
  * @example
10
  */
	end_column: number | null;
	/**
  * @example
2
  */
	end_line: number;
	/**
  * @example
Check your spelling for 'banaas'.
  */
	message: string | null;
	/**
  * @example
README.md
  */
	path: string;
	/**
  * @example
Do you mean 'bananas' or 'banana'?
  */
	raw_details: string | null;
	/**
  * @example
5
  */
	start_column: number | null;
	/**
  * @example
2
  */
	start_line: number;
	/**
  * @example
Spell Checker
  */
	title: string | null;
}
