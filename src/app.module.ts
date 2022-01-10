import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './crypto/crypto.module';
import { ThrottlerConfigModule } from './throttler/throttler-config.module';

@Module({
  imports: [CryptoModule, ThrottlerConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
