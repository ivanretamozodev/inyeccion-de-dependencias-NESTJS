import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor(private powerSvc: PowerService) {}
  compute(a: number, b: number): number {
    console.log('Drawing 10 Watts Of Power From Power Service');
    this.powerSvc.supplyPower(10);
    return a + b;
  }
}
