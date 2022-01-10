import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { cryptoConfig } from 'config/crypto.config';
import { CryptoService } from './crypto.service';

@Module({
  imports: [ConfigModule.forFeature(cryptoConfig)],
  providers: [CryptoService],
})
export class CryptoModule {}
