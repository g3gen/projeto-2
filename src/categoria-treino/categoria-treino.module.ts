import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaTreino } from "./entities/categoria-treino.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaTreino])],
  providers: [],
  controllers: [],
  exports: [],
})
export class CategoriaTreinoModule {}
