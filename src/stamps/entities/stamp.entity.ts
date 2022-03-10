import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stamp {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
