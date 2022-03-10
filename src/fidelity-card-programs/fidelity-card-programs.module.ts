import { Module } from '@nestjs/common';
import { FidelityCardProgramsService } from './fidelity-card-programs.service';
import { FidelityCardProgramsResolver } from './fidelity-card-programs.resolver';

@Module({
  providers: [FidelityCardProgramsResolver, FidelityCardProgramsService]
})
export class FidelityCardProgramsModule {}
