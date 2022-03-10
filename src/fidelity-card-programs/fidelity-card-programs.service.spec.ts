import { Test, TestingModule } from '@nestjs/testing';
import { FidelityCardProgramsService } from './fidelity-card-programs.service';

describe('FidelityCardProgramsService', () => {
  let service: FidelityCardProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FidelityCardProgramsService],
    }).compile();

    service = module.get<FidelityCardProgramsService>(FidelityCardProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
