import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ClinicModule } from './modules/clinics/clinic.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',

      host: process.env.DATABASE_HOST,

      port: Number(process.env.DATABASE_PORT),

      username: process.env.DATABASE_USER,

      password: process.env.DATABASE_PASSWORD,

      database: process.env.DATABASE_NAME,

      autoLoadEntities: true,

      synchronize: true,

      logging: true,
    }),

    ClinicModule,

    UsersModule,
  ],
})
export class AppModule {}