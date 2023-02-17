import { Injectable } from '@nestjs/common';
import { PowerService } from './../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerSvc: PowerService) {}

  getData(): string {
    console.log('Drawing 20 Watts Of Powe Service');
    this.powerSvc.supplyPower(20);
    return 'Data!';
  }
}
