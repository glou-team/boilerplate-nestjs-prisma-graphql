import { CreateFidelityCardProgramInput } from './create-fidelity-card-program.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFidelityCardProgramInput extends PartialType(CreateFidelityCardProgramInput) {
  @Field(() => Int)
  id: number;
}
