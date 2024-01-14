import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { ComputerController } from './computer.controller';
import { DiskModule } from 'src/disk/disk.module';

@Module({
    imports: [CpuModule, DiskModule],
    controllers: [ComputerController]
})
export class ComputerModule {}
