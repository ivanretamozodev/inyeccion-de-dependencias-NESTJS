import { Controller, Get } from '@nestjs/common';
import { CpuService } from './../cpu/cpu.service';
import { DiskService } from './../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(private diskSvc: DiskService, private cpuSvc: CpuService) {}
  @Get()
  run() {
    return [this.cpuSvc.compute(5, 9), this.diskSvc.getData()];
  }
}
