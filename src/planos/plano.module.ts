import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoController } from './controller/plano.controller';
import { Plano } from './entities/plano.entity';
import { PlanoService } from './service/plano.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { CategoriaTreinoModule } from '../categoria-treino/categoria-treino.module';

@Module({
  imports: [TypeOrmModule.forFeature([Plano]), UsuarioModule, CategoriaTreinoModule],
  providers: [PlanoService],
  controllers: [PlanoController],
  exports: [],
})
export class PlanoModule {}
