/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface GitCreateTagPathParams {
	owner: string;
	repo: string;
}

export interface GitCreateTagRequestBody {
	/**
	 * The tag message.
	 */
	message: string;
	/**
	 * The SHA of the git object this is tagging.
	 */
	object: string;
	/**
	 * The tag's name. This is typically a version (e.g., "v0.0.1").
	 */
	tag: string;
	/**
	 * An object with information about the individual creating the tag.
	 */
	tagger?: {
		/**
		 * When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
		 */
		date?: string;
		/**
		 * The email of the author of the tag
		 */
		email?: string;
		/**
		 * The name of the author of the tag
		 */
		name?: string;
	};
	/**
	 * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
	 */
	type: 'blob' | 'commit' | 'tree';
}

export interface GitCreateTagProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitCreateTagPathParams {
	body: GitCreateTagRequestBody;
}

/**
 * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
 *
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 */
export async function gitCreateTag(props: GitCreateTagProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/tags`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
