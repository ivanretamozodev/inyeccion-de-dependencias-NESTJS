import { PowerModule } from './../power/power.module';
import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule {}
