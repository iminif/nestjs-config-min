import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { cryptoConfig } from 'config/crypto.config';

@Injectable()
export class CryptoService {
  constructor(
    @Inject(cryptoConfig.KEY)
    private config: ConfigType<typeof cryptoConfig>,
  ) {
    console.log(`\nAccess crypto config @CryptoService`, this.config, '\n');
  }
}
