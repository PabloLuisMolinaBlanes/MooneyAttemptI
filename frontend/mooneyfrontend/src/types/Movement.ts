import type { Label } from "./Label";

export type Movement = {
    id?: number
    concept?: string | null,
    amount: number,
    label?: Label | null,
    date?:  Date | null
};