import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcSerasaOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'serasa',
        protoPath: join(__dirname, '../protos/serasa.proto'),
    },
};

export const grpcTransferOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'transfer',
        protoPath: join(__dirname, '../protos/transfer.proto'),
    },
};
