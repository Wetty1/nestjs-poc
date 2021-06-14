import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export default {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
    type: "mssql",
    entities: [__dirname + '/src/modules/**/models/*.entity{.js,.ts}'],
    database: process.env.DB_BASE,
    logger: "debug",
    options: {
        trustServerCertificate: true
    }
} as TypeOrmModuleOptions;
