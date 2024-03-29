import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cliente' })
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cpf: string;
}