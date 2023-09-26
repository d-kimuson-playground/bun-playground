import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetSampleQueryParams, GetSampleResponseBody } from './sample.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getSample(
    @Query() query: GetSampleQueryParams
  ): Promise<GetSampleResponseBody> {
    return {
      sample: this.appService.getHello()
    }
  }
}
