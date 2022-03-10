import { Test, TestingModule } from '@nestjs/testing';
import { FidelityCardProgramsResolver } from './fidelity-card-programs.resolver';
import { FidelityCardProgramsService } from './fidelity-card-programs.service';

describe('FidelityCardProgramsResolver', () => {
  let resolver: FidelityCardProgramsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FidelityCardProgramsResolver, FidelityCardProgramsService],
    }).compile();

    resolver = module.get<FidelityCardProgramsResolver>(FidelityCardProgramsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
