import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UsePipes,
  } from '@nestjs/common';
  
  import { ClinicService } from './clinic.service';
  
  import {
    createClinicSchema,
  } from './schemas/create-clinic.schema';
  
  import {
    updateClinicSchema,
  } from './schemas/update-clinic.schema';
import { ZodValidationPipe }
from '../../common/pipes/zod-validation.pipe';
  @Controller('clinics')
  export class ClinicController {
    constructor(
      private readonly clinicService:
        ClinicService,
    ) {}
  
    @Post()
    @UsePipes(
      new ZodValidationPipe(
        createClinicSchema,
      ),
    )
    create(
      @Body() body: any,
    ) {
      return this.clinicService.create(
        body,
      );
    }
  
    @Get()
    findAll() {
      return this.clinicService.findAll();
    }
  
    @Get(':id')
    findOne(
      @Param('id') id: string,
    ) {
      return this.clinicService.findOne(
        id,
      );
    }
  
    @Patch(':id')
    @UsePipes(
      new ZodValidationPipe(
        updateClinicSchema,
      ),
    )
    update(
      @Param('id') id: string,
      @Body() body: any,
    ) {
      return this.clinicService.update(
        id,
        body,
      );
    }
  
    @Delete(':id')
    remove(
      @Param('id') id: string,
    ) {
      return this.clinicService.remove(
        id,
      );
    }
  }