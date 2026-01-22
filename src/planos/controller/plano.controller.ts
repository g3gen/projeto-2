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
} from '@nestjs/common';
import { Plano } from '../entities/plano.entiti';
import { PlanoService } from '../service/plano.service';
@Controller('/planos')
export class PlanoController {
  constructor(private readonly PlanoService: PlanoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Plano[]> {
    return this.PlanoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Plano> {
    return this.PlanoService.findById(id);
  }

  @Get('/nivel/:nivel')
  @HttpCode(HttpStatus.OK)
  findByNivel(@Param('nivel') nivel: string): Promise<Plano[]> {
    return this.PlanoService.findByNivel(nivel);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Plano: Plano): Promise<Plano> {
    return this.PlanoService.create(Plano);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Plano: Plano): Promise<Plano> {
    return this.PlanoService.update(Plano);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.PlanoService.delete(id);
  }
}
