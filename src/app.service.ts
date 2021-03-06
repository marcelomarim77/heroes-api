import { Injectable } from '@nestjs/common';

import { HeroesRepository } from './repositories/heroes-repository';
import { Heroes } from './entities/heroes.entity';

@Injectable()
export class AppService {

  constructor(private readonly heroesRepository: HeroesRepository) {}

  async getAllHeroes() {
    const result = await this.heroesRepository.findAllHeroes();
    return result;
  };

  async getHeroesById(id: number) {
    const result = await this.heroesRepository.findHeroesById(id);
    return result;
  };

  async getHeroesByName(name: string) {
    const result = await this.heroesRepository.findHeroesByName(name);
    return result;
  };

  async deleteHero(id: number) {
    const result = await this.heroesRepository.deleteHero(id);
    return result;
  };

  async updateHero(hero: Heroes) {
    const result = await this.heroesRepository.updateHero(hero);
    return result;
  };

  async createHero(hero: Heroes) {
    const result = await this.heroesRepository.createHero(hero);
    return result;
  };

}
