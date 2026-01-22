import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CategoriaTreino } from "./entities/categoria-treino.entity";
import { CategoriaTreinoController } from "./controllers/categoria-treino.controller";
import { CategoriaTreinoService } from "./services/categoria-treino.service";

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaTreino])],
  controllers: [CategoriaTreinoController],
  providers: [CategoriaTreinoService],
  exports: [CategoriaTreinoService],
})
export class CategoriaTreinoModule {}
