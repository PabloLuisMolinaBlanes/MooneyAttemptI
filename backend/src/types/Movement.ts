import { Label } from "../types/Label"

export type Movement = {
    concept?: string | null,
    amount: number,
    label?: Label | null,
    date?:  Date | null
};