import { BadRequestException, Injectable } from '@nestjs/common';
import _ from 'lodash';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UpdateWriteOpResult } from 'mongoose';

import { TenantEntity } from './repositories/entities';
import { TenantRepository } from './repositories/tenant.repository';
import { CreateTenantDto } from './dtos/create-tenant.dto';

const encryptPassword = async (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  public async findById(id: string): Promise<TenantEntity | null> {
    return this.tenantRepository.findOneById(id);
  }

  public async createTempTenant(
    createTenantDto: CreateTenantDto,
  ): Promise<TenantEntity> {
    const tenant = new TenantEntity();
    tenant.firstName = '';
    tenant.lastName = '';
    tenant.phoneNumber = createTenantDto.phoneNumber;
    tenant.password = '';
    return this.tenantRepository.create(tenant);
  }

  public async create(registerDto: CreateTenantDto): Promise<TenantEntity> {
    const oldUser = await this.tenantRepository.findOne({
      phoneNumber: registerDto.phoneNumber,
    });
    if (!_.isEmpty(oldUser)) {
      throw new BadRequestException('phone_does_exist', 'Phone does exist');
    }

    const user = await this.tenantRepository.create({
      ...registerDto,
      password: await encryptPassword(
        registerDto.password ? registerDto.password : '',
      ),
    });

    return user;
  }

  public async registerWithPhoneNumber(
    phoneNumber: string,
  ): Promise<TenantEntity> {
    return this.tenantRepository.create({
      phoneNumber,
      password: await encryptPassword(uuidv4()),
    });
  }

  public async getAll(): Promise<TenantEntity[] | null> {
    const rooms = await this.tenantRepository.findAll();
    if (!rooms) {
      return null;
    }

    return rooms;
  }

  public async updateNewPassword(
    userId: string,
    password: string,
  ): Promise<UpdateWriteOpResult> {
    return this.tenantRepository.tenantModel.updateOne(
      { _id: userId },
      {
        password: await encryptPassword(password),
      },
    );
  }

  public async findByPhoneNumber(
    phoneNumber: string,
  ): Promise<TenantEntity | null> {
    return this.tenantRepository.findOneByPhoneNumber(phoneNumber);
  }
}
