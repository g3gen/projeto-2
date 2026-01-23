import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { Plano } from '../entities/plano.entity';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { CategoriaTreinoService } from '../../categoria-treino/services/categoria-treino.service';

@Injectable()
export class PlanoService {
  constructor(
    @InjectRepository(Plano)
    private planoRepository: Repository<Plano>,
    private usuarioService: UsuarioService,
    private categoriaService: CategoriaTreinoService
  ) { }

  async findAll(): Promise<Plano[]> {
    return await this.planoRepository.find({
      relations: {
        usuario: true,
        categoriaTreino: true
      }
    });
  }

  async findById(id: number): Promise<Plano> {
    const plano = await this.planoRepository.findOne({
      where: {
        id,
      },
      relations: {
        usuario: true,
        categoriaTreino: true
      }
    });
    if (!plano) {
      throw new HttpException('Plano não encontrado', HttpStatus.NOT_FOUND);
    }
    return plano;
  }

  async findByNivel(nivel: string): Promise<Plano[]> {
    return this.planoRepository.find({
      where: {
        nivel: ILike(`%${nivel}%`),
      },
      relations: {
        usuario: true,
        categoriaTreino: true
      }
    });
  }

  async create(plano: Plano): Promise<Plano> {
    await this.categoriaService.findById(plano.categoriaTreino.id);
    await this.usuarioService.findById(plano.usuario.id);
    return await this.planoRepository.save(plano);
  }

  async update(plano: Plano): Promise<Plano> {
    await this.findById(plano.id);
    await this.categoriaService.findById(plano.categoriaTreino.id);
    await this.usuarioService.findById(plano.usuario.id);
    return await this.planoRepository.save(plano);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.planoRepository.delete(id);
  }

}
