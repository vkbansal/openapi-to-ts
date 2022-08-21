export interface Verification {
	payload: string | null;
	reason: string;
	signature: string | null;
	verified: boolean;
}
