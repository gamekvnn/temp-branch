import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { Logger } from '@/common';
import { KeyValueService } from '@/modules/@core/key-value/key-value.service';
import { UserRepository } from '@/modules/user/repositories/user.repository';
import { PropertyRepository } from '@/modules/property/repositories/property.repository';
import { RoomRepository } from '@/modules/room/repositories/room.repository';
import { SessionRepository } from '@/modules/session/repositories/session.repository';
import { PropertyBillIssueTypesEnum } from '@/modules/property/repositories/entities/property.entity';
import { SessionStatusEnum } from '@/modules/session/repositories/entities/session.entity';
import { RoomTypesEnum } from '@/modules/room/repositories/entities';
import { TenantRepository } from '@/modules/tenant/repositories/tenant.repository';

@Injectable()
export class SeederService {
  private currentSeedVersion: string;

  constructor(
    private readonly logger: Logger,
    private readonly keyValueService: KeyValueService,
    private readonly userRepository: UserRepository,
    private readonly propertyRepository: PropertyRepository,
    private readonly roomRepository: RoomRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly tenantRepository: TenantRepository,
  ) {
    this.logger.setContext(SeederService.name);
    this.currentSeedVersion = '';
  }

  public async run(): Promise<void> {
    this.logger.log('Seeding data');

    await this.updateVersion('1.0.3');

    switch (this.currentSeedVersion) {
      case '1.0.0':
        await this.seedVersion1();
        break;
      case '1.0.1':
        this.seedVersion1_0_1();
        break;
      case '1.0.2':
        await this.seedVersion102();
        break;
      case '1.0.3':
        await this.seedVersion103();
        break;
      default:
        this.logger.log('No seed data');
        break;
    }
  }

  private async updateVersion(version: string): Promise<void> {
    await this.keyValueService.setValueByKey('seed_version', version);
    this.currentSeedVersion = version;
  }

  private async seedVersion1(): Promise<void> {
    this.logger.log('Seeding version 1.0.0');

    await this.userRepository.create({
      phoneNumber: faker.phone.number(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    });

    await this.updateVersion('1.0.1');
  }

  private async seedVersion102(): Promise<void> {
    // Generate data for a user, a property, rooms and sessions
    this.logger.log('Seeding version 1.0.1');
    // Generate data for a user
    const user = {
      phoneNumber: faker.phone.number(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };

    // Create the user
    const createdUser = await this.userRepository.create(user);

    // Generate data for a property associated with the user
    const property = {
      name: faker.location.buildingNumber(),
      type: faker.location.city(),
      createdById: createdUser._id, // Use the created user's ID
      roomQuantity: 6, // Create 6 rooms for this property
      floors: faker.number.int({ min: 1, max: 10 }),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      area: faker.number.int({ min: 1, max: 10 }),
      rentalPrice: faker.number.float({
        min: 10000000,
        max: 10000000,
        multipleOf: 1000000,
      }),
      billIssueType: faker.helpers.enumValue(PropertyBillIssueTypesEnum),
      billIssueAtDay: faker.number.int({ min: 1, max: 28 }), // Assuming monthly billing
    };

    const createdProperty = await this.propertyRepository.create(property);
    const roomPromises = Array.from({
      length: createdProperty.roomQuantity,
    }).map(async (_, index) => {
      const roomNumber = (index + 1).toString(); // Room number from 1 to roomQuantity
      return this.roomRepository.create({
        roomNumber,
        price: Math.floor(Math.random() * (5000 - 1000) + 1000), // Random price between 1000 and 5000
        propertyId: createdProperty._id, // Use the created property's ID
        type: faker.helpers.enumValue(RoomTypesEnum),
        floor: Math.floor(Math.random() * createdProperty.floors) + 1, // Random floor within the property's floors
        area: Math.floor(Math.random() * (100 - 10) + 10), // Random area between 10 and 100
        bedQuantity: Math.floor(Math.random() * (4 - 1) + 1), // Random bed quantity between 1 and 4
        bathroomQuantity: Math.floor(Math.random() * (3 - 1) + 1), // Random bathroom quantity between 1 and 3
        bedroomQuantity: Math.floor(Math.random() * (2 - 1) + 1), // Random bedroom quantity between 1 and 2
        livingRoomQuantity: Math.floor(Math.random() * 2), // Random living room quantity between 0 and 1
        kitchenQuantity: Math.floor(Math.random() * (2 - 1) + 1), // Random kitchen quantity between 1 and 2
        haveBalcony: Math.random() < 0.5, // Random boolean for balcony
      });
    });

    // Wait for all room creation promises to resolve
    const rooms = await Promise.all(roomPromises);

    // Create sessions for each room
    const sessionPromises = rooms.map(async (room) => {
      const createdTenant = await this.tenantRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password(),
      });
      return this.sessionRepository.create({
        roomId: room._id,
        propertyId: createdTenant._id,
        depositAmount: faker.datatype.number({ min: 1000000, max: 5000000 }),
        tennantId: createdUser._id,
        startDate: new Date(),
        status: faker.helpers.enumValue(SessionStatusEnum),
      });
    });

    await Promise.all(sessionPromises);
    await this.updateVersion('1.0.2');
  }

  private async seedVersion103(): Promise<void> {
    // Generate data for a user, a property, rooms and sessions
    this.logger.log('Seeding version 1.0.2');
    // Generate data for a user
    const user = {
      phoneNumber: faker.phone.number(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };

    // Create the user
    const createdUser = await this.userRepository.create(user);

    // Generate data for a property associated with the user
    const property = {
      name: faker.location.buildingNumber(),
      type: faker.location.city(),
      createdById: createdUser._id, // Use the created user's ID
      roomQuantity: 6, // Create 6 rooms for this property
      floors: faker.number.int({ min: 1, max: 10 }),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      area: faker.number.int({ min: 1, max: 10 }),
      rentalPrice: faker.number.float({
        min: 10000000,
        max: 10000000,
        multipleOf: 1000000,
      }),
      billIssueType: faker.helpers.enumValue(PropertyBillIssueTypesEnum),
      billIssueAtDay: faker.number.int({ min: 1, max: 28 }), // Assuming monthly billing
    };

    const createdProperty = await this.propertyRepository.create(property);
    const roomPromises = Array.from({
      length: createdProperty.roomQuantity,
    }).map(async (_, index) => {
      const roomNumber = (index + 1).toString(); // Room number from 1 to roomQuantity
      return this.roomRepository.create({
        roomNumber,
        price: Math.floor(Math.random() * (5000 - 1000) + 1000), // Random price between 1000 and 5000
        propertyId: createdProperty._id, // Use the created property's ID
        type: faker.helpers.enumValue(RoomTypesEnum),
        floor: Math.floor(Math.random() * createdProperty.floors) + 1, // Random floor within the property's floors
        area: Math.floor(Math.random() * (100 - 10) + 10), // Random area between 10 and 100
        bedQuantity: Math.floor(Math.random() * (4 - 1) + 1), // Random bed quantity between 1 and 4
        bathroomQuantity: Math.floor(Math.random() * (3 - 1) + 1), // Random bathroom quantity between 1 and 3
        bedroomQuantity: Math.floor(Math.random() * (2 - 1) + 1), // Random bedroom quantity between 1 and 2
        livingRoomQuantity: Math.floor(Math.random() * 2), // Random living room quantity between 0 and 1
        kitchenQuantity: Math.floor(Math.random() * (2 - 1) + 1), // Random kitchen quantity between 1 and 2
        haveBalcony: Math.random() < 0.5, // Random boolean for balcony
      });
    });

    // Wait for all room creation promises to resolve
    const rooms = await Promise.all(roomPromises);

    // Create sessions for each room

    // Create sessions for each room
    const sessionPromises = rooms.map(async (room) => {
      const createdTenant = await this.tenantRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password(),
      });
      return this.sessionRepository.create({
        roomId: room._id,
        propertyId: createdTenant._id,
        depositAmount: faker.datatype.number({ min: 1000000, max: 5000000 }),
        tennantId: createdUser._id,
        startDate: new Date(),
        status: faker.helpers.enumValue(SessionStatusEnum),
      });
    });

    await Promise.all(sessionPromises);
    await this.updateVersion('1.0.3');
  }

  private seedVersion1_0_1(): void {
    this.logger.log('Seeding version 1.0.3');
  }
}
