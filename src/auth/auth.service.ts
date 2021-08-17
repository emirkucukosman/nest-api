import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const match = await compare(pass, user.password);
      if (match) {
        const { _id, username, email } = user;
        return { _id, username, email };
      }
    }
    return null;
  }

  async login(user: any) {
    const { username, email, _id } = user;
    const payload = {
      username,
      email,
      sub: _id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
