import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CategoriaTreino } from "../entities/categoria-treino.entity";
import { CategoriaTreinoService } from "../services/categoria-treino.service";

@Controller("/categorias-treino")
export class CategoriaTreinoController {
  constructor(private readonly categoriaTreinoService: CategoriaTreinoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<CategoriaTreino[]> {
    return this.categoriaTreinoService.findAll();
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findById(@Param("id", ParseIntPipe) id: number): Promise<CategoriaTreino> {
    return this.categoriaTreinoService.findById(id);
  }

  @Get("/descricao/:descricao")
  @HttpCode(HttpStatus.OK)
  findAllByDescricao(
    @Param("descricao") descricao: string
  ): Promise<CategoriaTreino[]> {
    return this.categoriaTreinoService.findAllByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoriaTreino: CategoriaTreino): Promise<CategoriaTreino> {
    return this.categoriaTreinoService.create(categoriaTreino);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoriaTreino: CategoriaTreino): Promise<CategoriaTreino> {
    return this.categoriaTreinoService.update(categoriaTreino);
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.categoriaTreinoService.delete(id);
  }
}
