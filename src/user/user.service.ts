import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { updateUserDTO } from './dto/update-user.dto';
import { createUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    get(): Promise<User[]> {
        return this.userRepository.find()
    }

    create(createUserDTO: createUserDTO) {
        return this.userRepository.save(createUserDTO);
    }

    update(updateUserDTO: updateUserDTO, userId: number) {
        return this.userRepository.update(userId, updateUserDTO);
    }

    show(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email });
    }

    delete(userId: number) {
        return this.userRepository.delete(userId);
    }
}
