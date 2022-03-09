import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthType } from './dto/auth.dto';
import { AuthInput } from './dto/auth.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.usersService.findOne(data.email);

    if (!user) throw new UnauthorizedException('Invalid User');

    const isSamePassword = await compare(data.password, user.password);

    if (!isSamePassword) throw new UnauthorizedException('Incorrect password');

    const token = await this.generateJwtToken(user);
    delete user.password;

    return {
      user,
      token,
    };
  }

  private async generateJwtToken(user: User): Promise<string> {
    const payload = { email: user.email, sub: user.id };

    return this.jwtService.signAsync(payload);
  }
}
