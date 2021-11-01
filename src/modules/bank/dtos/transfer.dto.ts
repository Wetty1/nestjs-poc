export interface SuccessTransfer {
    id: number;
    timestamp: string;
}

export interface ITransferData {
    id_client: number;
    value_to_transfer: number;
    cpf_client_target: string;
}