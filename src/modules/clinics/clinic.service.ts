import {
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  
  import { InjectRepository } from '@nestjs/typeorm';
  
  import { Repository } from 'typeorm';
  
  import { Clinic } from './entities/clinic.entity';
  
  @Injectable()
  export class ClinicService {
    constructor(
      @InjectRepository(Clinic)
      private readonly clinicRepository: Repository<Clinic>,
    ) {}
  
    async create(data: Partial<Clinic>) {
      const clinic =
        this.clinicRepository.create(data);
  
      return this.clinicRepository.save(
        clinic,
      );
    }
  
    async findAll() {
      return this.clinicRepository.find();
    }
  
    async findOne(id: string) {
      const clinic =
        await this.clinicRepository.findOne({
          where: { id },
        });
  
      if (!clinic) {
        throw new NotFoundException(
          'Clinic not found',
        );
      }
  
      return clinic;
    }
  
    async update(
      id: string,
      data: Partial<Clinic>,
    ) {
      const clinic =
        await this.findOne(id);
  
      Object.assign(
        clinic,
        data,
      );
  
      return this.clinicRepository.save(
        clinic,
      );
    }
  
    async remove(id: string) {
      const clinic =
        await this.findOne(id);
  
      await this.clinicRepository.remove(
        clinic,
      );
  
      return {
        message:
          'Clinic deleted successfully',
      };
    }
  }
