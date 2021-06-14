import { HttpService, Inject, Injectable } from "@nestjs/common";
import { DataPerson, ResponseFindPerson } from "../../../dtos/serasa_http.dto";

@Injectable()
export class SerasaHttpRepository {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async findPersonByCPF(cpf: string): Promise<DataPerson> {
        try {
            const response = await this.httpService.get<ResponseFindPerson>(`http://localhost:3001/person?cpf=${cpf}`).toPromise()
            console.log(response.data);
            return response.data[0];
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}