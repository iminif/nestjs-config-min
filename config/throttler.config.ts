import { registerAs } from '@nestjs/config';
import { ThrottlerModuleOptions } from '@nestjs/throttler';

const throttlerConfig = registerAs('throttler', (): ThrottlerModuleOptions => {
  return {
    ttl: 5,
    limit: 5,
  } as ThrottlerModuleOptions;
});

export { throttlerConfig };
