import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FidelityCardProgram {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
