import { ITransferData, SuccessTransfer } from "../dtos/transfer.dto";

export interface ITransferRepository {
    transferTo(data: ITransferData): Promise<SuccessTransfer>
}