import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_categorias_treino" })
export class CategoriaTreino {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @Column({ length: 255, nullable: false })
  descricao: string;
}
