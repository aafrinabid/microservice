import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [HeroController],
  providers: [HeroService]
})
export class HeroModule {}
