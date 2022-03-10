import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStampInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
