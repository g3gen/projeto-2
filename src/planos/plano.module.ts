import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoController } from './controller/plano.controller';
import { Plano } from './entities/plano.entiti';
import { PlanoService } from './service/plano.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  providers: [PlanoService],
  controllers: [PlanoController],
  exports: [],
})
export class PlanoModule {}
