import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: {
        planos: true
      }
    });
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id: id, // CORREÇÃO: Aqui deve ser 'id', não 'usuario'
      },
      relations: {
        planos: true
      }
    });

    if (!usuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    return usuario;
  }

  // Busca pelo E-mail (que chamamos de usuario no banco)
  async findByUsuario(usuario: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({
      where: {
        usuario: usuario, // Agora funciona porque a Entity tem a prop 'usuario'
      },
      relations: {
        planos: true
      }
    });
  }

  // Busca parcial por nome
  async findByNome(nome: string): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      where: {
        nome: nome, // Assumindo busca exata por simplicidade, ou use ILike
      },
      relations: {
        planos: true
      }
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    // Verifica se já existe
    const buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (buscaUsuario) {
      throw new HttpException('O Usuário já existe!', HttpStatus.BAD_REQUEST);
    }

    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    // Verificamos se o ID existe
    const buscaUsuario = await this.findById(usuario.id);

    // Se não explodiu erro acima, continuamos (verificação extra opcional)
    if (!buscaUsuario || !usuario.id)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    return await this.usuarioRepository.save(usuario);
  }

  async delete(id: number): Promise<void> {
    // CORREÇÃO: Apenas chamamos o findById para validar se existe.
    // Não precisamos guardar em uma variável const.
    await this.findById(id);

    await this.usuarioRepository.delete(id);
  }
}
