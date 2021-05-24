import { Injectable } from '@nestjs/common'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ICustomer } from '../../../models/ICustomer'

@Entity('customer')
export class Customer implements ICustomer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    cpf: string;
    @Column()
    birthdate: string;
}