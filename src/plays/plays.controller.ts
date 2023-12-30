import { Controller, Get } from '@nestjs/common';
import { PlaysService } from './plays.service';

@Controller('plays')
export class PlaysController {
  constructor(private readonly playsService: PlaysService) {}

  @Get()
  async getAllPlays() {
    return await this.playsService.findAll();
  }
}
