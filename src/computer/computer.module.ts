import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';

@Module({
  providers: [ComputerService]
})
export class ComputerModule {}
