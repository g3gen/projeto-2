import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Plano } from "../../planos/entities/plano.entity";

@Entity({ name: "tb_categorias_treino" })
export class CategoriaTreino {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @Column({ length: 255, nullable: false })
  descricao: string;

  @OneToMany(() => Plano, (plano) => plano.categoriaTreino)
  planos: Plano[];
  
}