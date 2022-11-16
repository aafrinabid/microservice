import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),HeroModule, AuthModule],
})
export class AppModule {}
