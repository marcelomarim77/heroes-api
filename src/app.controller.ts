import { Controller, Param, Get, Delete, Put, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { Heroes } from './entities/heroes.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllHeroes() {
    return this.appService.getAllHeroes();
  }

  @Get('/id/:id')
  async getHeroesById(@Param('id') id: number) {
    return this.appService.getHeroesById(id);
  }

  @Delete('/id/:id')
  async deleteHero(@Param('id') id: number) {
    return this.appService.deleteHero(id);
  }

  @Put('/id/:id')
  async updateHero(@Param('id') hero: Heroes) {
    return this.appService.updateHero(hero);
  }

}