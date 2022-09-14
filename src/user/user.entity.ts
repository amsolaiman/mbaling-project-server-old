import { NonAccountDto } from './../non-account/non-account.entity';
import { PostDto } from './../entities/post.entity';
import { HousingDto } from './../housing-unit/housing.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/interfaces/users.interfaces';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { ApplicationDto } from 'src/application/application.entity';
import { join } from 'path';

@Entity('user')
export class UserDto implements Users {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  id?: number;

  @ApiProperty({ default: '0' })
  @Column({ nullable: false })
  studentId: number;

  @ApiProperty({ default: 'Nahed' })
  @Column({ length: 100 })
  fName: string;

  @ApiProperty({ default: 'M', required: false })
  @Column({ length: 100, nullable: true })
  mName?: string;

  @ApiProperty({ default: 'HadjiAli' })
  @Column({ length: 100 })
  lName: string;

  @ApiProperty({ default: 'default@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email: string;

  @ApiProperty({ default: 'admin' })
  @Column({ length: 100 })
  type: string;

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'inactive';

  @ApiProperty({ default: 'admin' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ default: '01/02/03' })
  @Column({ length: 100 })
  birthdate: string;

  @ApiProperty({ default: 'BS-IT' })
  @Column({ length: 100 })
  degree: string;

  @ApiProperty({ default: 'Department of Computer Science' })
  @Column({ length: 100 })
  department: string;

  @ApiProperty({ default: 'College of Information and Computing Sciences' })
  @Column({ length: 100 })
  college: string;

  @ApiProperty({ default: '0907-478-7550' })
  @Column({ length: 100 })
  contact: string;

  @ApiProperty({ default: 'Male' })
  @Column({ length: 100 })
  gender: string;

  @ApiProperty({ default: '2020' })
  @Column({ length: 100 })
  year: string;

  @ApiProperty({ default: 'Street' })
  @Column({ length: 100 })
  address1: string;

  @ApiProperty({ default: 'Barangay' })
  @Column({ length: 100 })
  address2: string;

  @ApiProperty({ default: 'Municipality' })
  @Column({ length: 100 })
  address3: string;

  @ApiProperty({ default: 'Province' })
  @Column({ length: 100 })
  address4: string;

  @ApiProperty({ default: '0' })
  @Column({ nullable: true })
  prfphoto: number;

  @ApiProperty({ default: 'm.me/walie' })
  @Column({ length: 100 })
  chatLink: string;

  @ApiProperty({ default: 'idont' })
  @Column({ length: 100 })
  mapLink: string;

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;


  @ApiProperty({default: null, required: true, type: () => HousingDto })
  @ManyToOne(() => HousingDto, (housing) => housing.user, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true
  })
  @JoinColumn()
  housing?: HousingDto[];

  @OneToMany(() => PostDto, (post) => post.userID)
  postid: PostDto[];

  @OneToMany(
    () => ApplicationDto,
    (studentApplication) => studentApplication.student,
  )
  studentApplication: ApplicationDto[];

  @OneToMany(
    () => ApplicationDto,
    (landlordApplication) => landlordApplication.landlord,
  )
  landlordApplication: ApplicationDto[];

  @OneToMany(() => NonAccountDto, (nonAccount) => nonAccount.landlord)
  nonAccount: NonAccountDto[];
}
