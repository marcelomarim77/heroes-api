import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Heroes } from '../entities/heroes.entity';

@EntityRepository(Heroes)
export class HeroesRepository extends Repository<Heroes> {
    async findAllHeroes() {
        return await this.find();
    };

    async findHeroesById(id: number) {
        return await this.findOne({ id: id });
    };

    async findHeroesByName(name: string) {
        console.log(name);
        return await getConnection()
        .createQueryBuilder()
        .select("*")
        .from(Heroes, "heroes")
        .where("heroes.name = :name", { name: name})
        .getMany();
    };

    async deleteHero(id: number) {
        let hero = await this.findOne({ id: id });
        return await this.remove(hero);
    };

    async updateHero(hero: Heroes) {
        return await this.update(hero.id, hero);
    };

    async createHero(hero: Heroes) {
        return await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Heroes)
                .values([
                    { name: hero.name }
                ])
                .execute();
    };

}
