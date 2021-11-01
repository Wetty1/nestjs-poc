import { Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { ISerasaGrpcService } from '../interfaces/serasa.grpc.interface';
import { grpcSerasaOptions } from '../config/grpc.options';
import { DataPerson } from '../../../dtos/serasa.dto';
import { ISerasaRepository } from '../../../repository/ISerasaRepository';

export class SerasaGrpcRepository implements OnModuleInit, ISerasaRepository {
    private logger = new Logger(SerasaGrpcRepository.name);

    @Client(grpcSerasaOptions)
    private client: ClientGrpc;

    private grpcService: ISerasaGrpcService;

    onModuleInit() {
        this.grpcService =
            this.client.getService<ISerasaGrpcService>('SerasaController');
    }

    async findByDocument(document: string): Promise<DataPerson> {
        this.logger.log(document);
        console.log(this.grpcService);
        const res = await this.grpcService
            .getPersonByDocument({ document })
            .toPromise();
        console.log(res);
        return res;
    }
}
