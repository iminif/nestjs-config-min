import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { throttlerConfig } from 'config/throttler.config';
import { ThrottlerConfigService } from './throttler-config.service';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule.forFeature(throttlerConfig)],
      useClass: ThrottlerConfigService,
    }),
  ],
})
export class ThrottlerConfigModule {}
