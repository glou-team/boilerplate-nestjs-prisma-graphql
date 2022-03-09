import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';

import { PrismaService } from 'src/prisma.service';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const hashedPassword = hashSync(createUserInput.password, 10);

    const data: CreateUserInput = {
      ...createUserInput,
      password: hashedPassword,
    };

    const user = await this.prisma.user.create({ data });

    return user;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
