import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ICustomer } from '../../../models/ICustomer';

@Entity('customer')
export class Customer implements ICustomer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    cpf: string;
    @Column({ name: 'birth_date', type: 'timestamp' })
    birthdate: Date;
}
