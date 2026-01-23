import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plano } from './planos/entities/plano.entiti';
import { PlanoModule } from './planos/plano.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_fittrack',
      entities: [Plano],
      entities: [Usuario],
      synchronize: true,
    }),
    PlanoModule,
    }),
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
