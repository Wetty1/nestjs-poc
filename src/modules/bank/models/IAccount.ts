export interface IAccount {
    id: number;
    customer_id: number;
    type: "corrente" | "poupança";
    amount: number;
}