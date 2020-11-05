import { EntityRepository, Repository } from 'typeorm';

import { Heroes } from '../entities/heroes.entity';

@EntityRepository(Heroes)
export class HeroesRepository extends Repository<Heroes> {
    async findAllHeroes() {
        return await this.find();
    }

    async findHeroesById(id: number) {
        return await this.findOne({ id: id });
    }

    async deleteHero(id: number) {
        let heroToRemove = await this.findOne({ id: id });
        return await this.remove(heroToRemove);
    }

    async updateHero(heroToUpdate: Heroes) {
        return await this.update(heroToUpdate.id, heroToUpdate);
    }

}
