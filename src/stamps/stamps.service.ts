import { Injectable } from '@nestjs/common';
import { CreateStampInput } from './dto/create-stamp.input';
import { UpdateStampInput } from './dto/update-stamp.input';

@Injectable()
export class StampsService {
  create(createStampInput: CreateStampInput) {
    return 'This action adds a new stamp';
  }

  findAll() {
    return `This action returns all stamps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stamp`;
  }

  update(id: number, updateStampInput: UpdateStampInput) {
    return `This action updates a #${id} stamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} stamp`;
  }
}
