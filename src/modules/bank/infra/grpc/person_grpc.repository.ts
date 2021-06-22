import { Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from 'src/grpc.interface';
import { microserviceOptions } from 'src/grpc.options';
import { DataPerson } from '../../dtos/serasa_http.dto';

export class PersonGrpcRepository implements OnModuleInit {
    private logger = new Logger(PersonGrpcRepository.name);

    @Client(microserviceOptions)
    private client: ClientGrpc;

    private grpcService: IGrpcService;

    onModuleInit() {
        this.grpcService = this.client.getService<IGrpcService>(
            PersonGrpcRepository.name,
        );
    }

    async findByDocument(document: string): Promise<DataPerson> {
        this.logger.log(document);
        return this.grpcService.getDocumentByDocument(document).toPromise();
    }
}
