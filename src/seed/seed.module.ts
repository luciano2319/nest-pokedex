import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    CommonModule,
    PokemonModule,
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
