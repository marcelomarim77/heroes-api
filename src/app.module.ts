import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { HeroesRepository } from './repositories/heroes-repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'Mapego110713@',
        database: 'teste',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    }),
    TypeOrmModule.forFeature([
      HeroesRepository
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
