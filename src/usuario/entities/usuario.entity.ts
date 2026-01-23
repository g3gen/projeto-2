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

  // @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  // imc: number;

  @Column({ type: "float" })
  altura: number; // em metros (ex: 1.63)

  @Column({ type: "float" })
  peso: number; // em kg (ex: 88.9)

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @OneToMany(() => Plano, (plano) => plano.usuario)
  planos: Plano[];

}