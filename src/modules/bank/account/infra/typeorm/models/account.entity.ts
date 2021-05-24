import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IAccount } from '../../../models/IAccount';

export class Account implements IAccount {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    customer_id: number;
    @Column()
    type: 'corrente' | 'poupança';
    @Column()
    amount: number;

}