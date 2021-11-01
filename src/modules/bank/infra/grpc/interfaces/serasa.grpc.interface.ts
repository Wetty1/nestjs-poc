import { Observable } from 'rxjs';
import { DataPerson } from './../../../dtos/serasa.dto';

export interface ISerasaGrpcService {
    getPersonByDocument(document: IDocument): Observable<DataPerson>;
}

interface IDocument {
    document: string;
}
