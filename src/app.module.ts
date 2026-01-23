import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Usuario } from "./usuario/entities/usuario.entity";
import { UsuarioModule } from "./usuario/usuario.module";

import { Plano } from "./planos/entities/plano.entity";
import { PlanoModule } from "./planos/plano.module";

import { CategoriaTreino } from "./categoria-treino/entities/categoria-treino.entity";
import { CategoriaTreinoModule } from "./categoria-treino/categoria-treino.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "db_fittrack",
      entities: [Usuario, Plano, CategoriaTreino],
      synchronize: true,
    }),
    UsuarioModule,
    PlanoModule,
    CategoriaTreinoModule,
  ],
})
export class AppModule {}