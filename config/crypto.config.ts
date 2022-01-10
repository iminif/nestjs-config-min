import { registerAs } from '@nestjs/config';

export const cryptoConfig = registerAs('crypto', (): CryptoConfigOptions => {
  return {
    password: 'crypto.password',
    salt: 'crypto.salt',
  };
});

export interface CryptoConfigOptions {
  password: string;
  salt: string;
}
