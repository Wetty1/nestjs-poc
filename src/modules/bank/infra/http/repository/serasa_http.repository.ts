import { HttpService, Inject, Injectable } from "@nestjs/common";
import { DataPerson, ResponseFindPerson } from "../../../dtos/serasa.dto";
import { ISerasaRepository } from '../../../repository/ISerasaRepository';

@Injectable()
export class SerasaHttpRepository implements ISerasaRepository {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async findByDocument(document: string): Promise<DataPerson> {
        try {
            const response = await this.httpService.get<ResponseFindPerson>(`http://localhost:3001/person?cpf=${document}`).toPromise()
            console.log(response.data);
            return response.data[0];
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}