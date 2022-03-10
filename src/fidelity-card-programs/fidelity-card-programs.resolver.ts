import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FidelityCardProgramsService } from './fidelity-card-programs.service';
import { FidelityCardProgram } from './entities/fidelity-card-program.entity';
import { CreateFidelityCardProgramInput } from './dto/create-fidelity-card-program.input';
import { UpdateFidelityCardProgramInput } from './dto/update-fidelity-card-program.input';

@Resolver(() => FidelityCardProgram)
export class FidelityCardProgramsResolver {
  constructor(private readonly fidelityCardProgramsService: FidelityCardProgramsService) {}

  @Mutation(() => FidelityCardProgram)
  createFidelityCardProgram(@Args('createFidelityCardProgramInput') createFidelityCardProgramInput: CreateFidelityCardProgramInput) {
    return this.fidelityCardProgramsService.create(createFidelityCardProgramInput);
  }

  @Query(() => [FidelityCardProgram], { name: 'fidelityCardPrograms' })
  findAll() {
    return this.fidelityCardProgramsService.findAll();
  }

  @Query(() => FidelityCardProgram, { name: 'fidelityCardProgram' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fidelityCardProgramsService.findOne(id);
  }

  @Mutation(() => FidelityCardProgram)
  updateFidelityCardProgram(@Args('updateFidelityCardProgramInput') updateFidelityCardProgramInput: UpdateFidelityCardProgramInput) {
    return this.fidelityCardProgramsService.update(updateFidelityCardProgramInput.id, updateFidelityCardProgramInput);
  }

  @Mutation(() => FidelityCardProgram)
  removeFidelityCardProgram(@Args('id', { type: () => Int }) id: number) {
    return this.fidelityCardProgramsService.remove(id);
  }
}
