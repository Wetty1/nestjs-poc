import { DataPerson } from "../dtos/serasa.dto";

export interface ISerasaRepository {
    findByDocument(document: string): Promise<DataPerson>
}