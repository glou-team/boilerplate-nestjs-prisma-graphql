import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // trocar quando implementar refresh token
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: User['id']; email: string }) {
    const user = await this.usersService.findById(payload.sub);

    if (!user) throw new UnauthorizedException('Forbidden');

    delete user.password;

    return user;
  }
}
