import { Observable } from 'rxjs';
import { DataPerson } from './modules/bank/dtos/serasa_http.dto';

export interface IGrpcService {
    accumulate(numberArray: INumberArray): Observable<any>;
    getDocumentByDocument(document: string): Observable<DataPerson>;
}

interface INumberArray {
    data: number[];
}
