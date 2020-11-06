import { EntityRepository, Repository } from 'typeorm';

import { Heroes } from '../entities/heroes.entity';

@EntityRepository(Heroes)
export class HeroesRepository extends Repository<Heroes> {
    async findAllHeroes() {
        return await this.find();
    };

    async findHeroesById(id: number) {
        return await this.findOne({ id: id });
    };

    async deleteHero(id: number) {
        let hero = await this.findOne({ id: id });
        return await this.remove(hero);
    };

    async updateHero(hero: Heroes) {
        return await this.update(hero.id, hero);
    };

    async createHero(hero: Heroes) {
        return await this.create(hero);
    };

}
