import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { CategoriaTreino } from '../../categoria-treino/entities/categoria-treino.entity';

@Entity({ name: 'tb_planos' })
export class Plano {
  
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column()
  duracao: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nivel: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.planos, {
    onDelete: 'CASCADE'
  })
  usuario: Usuario;

  @ManyToOne(() => CategoriaTreino, (categoria) => categoria.planos, {
    onDelete: 'CASCADE'
  })
  categoriaTreino: CategoriaTreino;

}