import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){

    }

    getDate(){
        console.log(`Drawing 20 watts from powerservice`);
        this.powerService.supplyPower(20);
        return `data!!`;
        
    }

}
