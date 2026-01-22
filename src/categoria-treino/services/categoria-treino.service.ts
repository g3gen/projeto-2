import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaTreino } from "../entities/categoria-treino.entity";

@Injectable()
export class CategoriaTreinoService {
  constructor(
    @InjectRepository(CategoriaTreino)
    private categoriaTreinoRepository: Repository<CategoriaTreino>
  ) {}

  async findAll(): Promise<CategoriaTreino[]> {
    return await this.categoriaTreinoRepository.find();
  }

  async findById(id: number): Promise<CategoriaTreino> {
    const categoria = await this.categoriaTreinoRepository.findOne({
      where: { id },
    });

    if (!categoria)
      throw new HttpException(
        "Categoria de treino não encontrada!",
        HttpStatus.NOT_FOUND
      );

    return categoria;
  }

  async findAllByDescricao(descricao: string): Promise<CategoriaTreino[]> {
    return await this.categoriaTreinoRepository.find({
      where: { descricao: ILike(`%${descricao}%`) },
    });
  }

  async create(categoriaTreino: CategoriaTreino): Promise<CategoriaTreino> {
    return await this.categoriaTreinoRepository.save(categoriaTreino);
  }

  async update(categoriaTreino: CategoriaTreino): Promise<CategoriaTreino> {
    await this.findById(categoriaTreino.id);

    return await this.categoriaTreinoRepository.save(categoriaTreino);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.categoriaTreinoRepository.delete(id);
  }
}
