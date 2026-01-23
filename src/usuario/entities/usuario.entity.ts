import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plano } from '../../planos/entities/plano.entity';

@Entity({ name: 'tb_usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @Column({ length: 5000, nullable: true })
  foto: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @OneToMany(() => Plano, (plano) => plano.usuario)
  planos: Plano[];

}