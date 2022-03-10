import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFidelityCardProgramInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
