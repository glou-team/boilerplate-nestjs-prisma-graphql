import { Injectable } from '@nestjs/common';
import { CreateFidelityCardProgramInput } from './dto/create-fidelity-card-program.input';
import { UpdateFidelityCardProgramInput } from './dto/update-fidelity-card-program.input';

@Injectable()
export class FidelityCardProgramsService {
  create(createFidelityCardProgramInput: CreateFidelityCardProgramInput) {
    return 'This action adds a new fidelityCardProgram';
  }

  findAll() {
    return `This action returns all fidelityCardPrograms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fidelityCardProgram`;
  }

  update(id: number, updateFidelityCardProgramInput: UpdateFidelityCardProgramInput) {
    return `This action updates a #${id} fidelityCardProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} fidelityCardProgram`;
  }
}
