import { type DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

import { HealthController } from "./health.controller";
import { Health } from "./health.enum";
import { type IHealth } from "./health.interface";

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
})
export class DynamicHealthModule {
  static register<A, M, G>({
    Disk,
    gRPC,
    HttpPing,
    HttpRes,
    MemoryRss,
    MemoryHeap,
    Microservice,
    Mongoose,
  }: IHealth<A, M, G>): DynamicModule {
    return {
      module: DynamicHealthModule,
      providers: [
        {
          provide: Health.DISK,
          useValue: Disk,
        },
        {
          provide: Health.GRPC,
          useValue: gRPC,
        },
        {
          provide: Health.HTTP_RES,
          useValue: HttpRes,
        },
        {
          provide: Health.HTTP_PING,
          useValue: HttpPing,
        },
        {
          provide: Health.MEMORY_RSS,
          useValue: MemoryRss,
        },
        {
          provide: Health.MEMORY_HEAP,
          useValue: MemoryHeap,
        },
        {
          provide: Health.MICROSERVICE,
          useValue: Microservice,
        },
        //! {
        //!   provide: Health.MIKRO_ORM,
        //!   useValue: MikroOrm,
        //! },
        {
          provide: Health.MONGOOSE,
          useValue: Mongoose,
        },
        //! {
        //!   provide: Health.SEQUELIZE,
        //!   useValue: Sequelize,
        //! },
        //! {
        //!   provide: Health.TYPE_ORM,
        //!   useValue: TypeOrm,
        //! },
      ],
      controllers: [HealthController],
    };
  }
}
