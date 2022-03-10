import { Test, TestingModule } from '@nestjs/testing';
import { StampsResolver } from './stamps.resolver';
import { StampsService } from './stamps.service';

describe('StampsResolver', () => {
  let resolver: StampsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StampsResolver, StampsService],
    }).compile();

    resolver = module.get<StampsResolver>(StampsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
