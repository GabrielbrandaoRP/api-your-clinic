import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('clinics')
  export class Clinic {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({
      length: 150,
    })
    name: string;
  
    @Column({
      unique: true,
      length: 100,
    })
    slug: string;
    
    @Column({
      unique: true,
      length: 10
    })
    tenantId: string

    @Column({
      unique: true
    })
    subdomain: string
  
    @Column({
      nullable: true,
    })
    logo: string;
  
    @Column({
      default: '#2563eb',
    })
    primaryColor: string;
  
    @Column({
      default: '#1e293b',
    })
    secondaryColor: string;
  
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
  }