import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CategoriaTreino } from "./categoria-treino/entities/categoria-treino.entity";
import { CategoriaTreinoModule } from "./categoria-treino/categoria-treino.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "0701",
      database: "db_fittrack",
      entities: [CategoriaTreino],
      synchronize: true,
    }),
    CategoriaTreinoModule, // <<< AQUI
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
