import { Injectable } from '@nestjs/common';

import { HeroesRepository } from './repositories/heroes-repository';
import { Heroes } from './entities/heroes.entity';

@Injectable()
export class AppService {

  constructor(
    private readonly heroesRepository: HeroesRepository
  ) {}

  async getAllHeroes() {
    const result = await this.heroesRepository.findAllHeroes();
    return result;
  };

  async getHeroesById(id: number) {
    const result = await this.heroesRepository.findHeroesById(id);
    return result;
  };

  async deleteHero(id: number) {
    const result = await this.heroesRepository.deleteHero(id);
    return result;
  };

  async updateHero(heroToUpdate: Heroes) {
    const result = await this.heroesRepository.updateHero(heroToUpdate);
    return result;
  };

}
