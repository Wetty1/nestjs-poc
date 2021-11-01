import { Observable } from 'rxjs';
import { ITransferData, SuccessTransfer } from './../../../dtos/transfer.dto';

export interface ITransferGrpcService {
    transferTo(dataTransfer: ITransferData): Observable<SuccessTransfer>;
}
