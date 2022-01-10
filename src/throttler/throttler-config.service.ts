import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import {
  ThrottlerModuleOptions,
  ThrottlerOptionsFactory,
} from '@nestjs/throttler';
import { throttlerConfig } from 'config/throttler.config';

@Injectable()
export class ThrottlerConfigService implements ThrottlerOptionsFactory {
  constructor(
    @Inject(throttlerConfig.KEY)
    private readonly throttler: ConfigType<typeof throttlerConfig>,

    private configService: ConfigService,
  ) {
    console.log(
      `\nAccess crypto config @ThrottlerConfigService`,
      this.configService.get('crypto'),
      '\n',
    );
  }

  protected defaults = { ttl: 10, limit: 60 };

  async createThrottlerOptions(): Promise<ThrottlerModuleOptions> {
    return {
      ttl: this.throttler.ttl || this.defaults.ttl,
      limit: this.throttler.limit || this.defaults.limit,
    };
  }
}
