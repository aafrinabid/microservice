import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Controller('hero')
export class HeroController {
    @GrpcMethod('HeroService')
    findOne(data: HeroById): Hero {
        const items: Hero[] = [{ id: 1, name: 'Damon' }, { id: 2, name: 'Ran' }];
        console.log('happening inside microservices')
        return items.find(({ id }) => id === data.id);
    }
}
