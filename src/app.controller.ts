import { Body, Controller, Logger, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { ApiProperty } from '@nestjs/swagger';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
    private logger = new Logger(AppController.name);

    @Client(microserviceOptions)
    private client: ClientGrpc;

    private grpcService: IGrpcService;

    onModuleInit() {
        this.grpcService = this.client.getService<IGrpcService>(
            AppController.name,
        );
    }

    @ApiProperty({
        description: 'Somatória de numeros',
        type: [Number],
    })
    @Post('add')
    async accumulate(@Body('data') data: number[]) {
        this.logger.log('log no server HTTP: ' + data.toString());
        return this.grpcService.accumulate({ data });
    }
}
