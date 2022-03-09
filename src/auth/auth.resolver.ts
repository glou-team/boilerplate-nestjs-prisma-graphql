import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthType } from './dto/auth.dto';
import { AuthInput } from './dto/auth.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthType)
  async login(@Args('data') data: AuthInput): Promise<AuthType> {
    return await this.authService.validateUser(data);
  }
}
