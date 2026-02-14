import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MessagePayload {
    message: string;
    senderName: string;
    senderEmail: string;
}
export interface Submission {
    timestamp: Time;
    payload: MessagePayload;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessages(): Promise<Array<Submission>>;
    submitMessage(payload: MessagePayload): Promise<void>;
}
