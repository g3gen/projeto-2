

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
