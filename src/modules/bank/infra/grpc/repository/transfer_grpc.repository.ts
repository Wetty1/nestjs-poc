import { Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { ITransferGrpcService } from '../interfaces/transfer.grpc.interface';
import { grpcTransferOptions } from '../config/grpc.options';
import { ITransferData, SuccessTransfer } from '../../../dtos/transfer.dto';
import { ITransferRepository } from '../../../repository/ITransferRepository';

export class TransferGrpcRepository implements OnModuleInit, ITransferRepository {
    private logger = new Logger(TransferGrpcRepository.name);

    @Client(grpcTransferOptions)
    private client: ClientGrpc;

    private grpcService: ITransferGrpcService;

    onModuleInit() {
        this.grpcService =
            this.client.getService<ITransferGrpcService>('TransferController');
    }

    async transferTo(transferData: ITransferData): Promise<SuccessTransfer> {
        this.logger.log(transferData);
        console.log(this.grpcService);
        const res = await this.grpcService
            .transferTo(transferData)
            .toPromise();
        console.log(res);
        return res;
    }
}
