import { Module } from '@nestjs/common';
import { StampsService } from './stamps.service';
import { StampsResolver } from './stamps.resolver';

@Module({
  providers: [StampsResolver, StampsService]
})
export class StampsModule {}
