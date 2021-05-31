import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export default {
    host: "localhost",
    username: "sa",
    password: "Teste12345678",
    port: 1433,
    type: "mssql",
    entities: [__dirname + '/src/modules/**/models/*.entity{.js,.ts}'],
    database: "master",
    logger: "debug",
    options: {
        trustServerCertificate: true
    }
} as TypeOrmModuleOptions;
