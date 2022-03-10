import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StampsService } from './stamps.service';
import { Stamp } from './entities/stamp.entity';
import { CreateStampInput } from './dto/create-stamp.input';
import { UpdateStampInput } from './dto/update-stamp.input';

@Resolver(() => Stamp)
export class StampsResolver {
  constructor(private readonly stampsService: StampsService) {}

  @Mutation(() => Stamp)
  createStamp(@Args('createStampInput') createStampInput: CreateStampInput) {
    return this.stampsService.create(createStampInput);
  }

  @Query(() => [Stamp], { name: 'stamps' })
  findAll() {
    return this.stampsService.findAll();
  }

  @Query(() => Stamp, { name: 'stamp' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stampsService.findOne(id);
  }

  @Mutation(() => Stamp)
  updateStamp(@Args('updateStampInput') updateStampInput: UpdateStampInput) {
    return this.stampsService.update(updateStampInput.id, updateStampInput);
  }

  @Mutation(() => Stamp)
  removeStamp(@Args('id', { type: () => Int }) id: number) {
    return this.stampsService.remove(id);
  }
}
