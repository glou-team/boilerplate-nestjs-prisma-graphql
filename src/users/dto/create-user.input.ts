import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: "User's email" })
  email: string;

  @Field(() => String)
  password: string;
}
