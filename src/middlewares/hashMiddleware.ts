import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';
import { hashSync } from 'bcrypt';

export const hashMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();

  console.log({ value });

  const hashedValue = hashSync(value, 8);

  console.log({ hashMiddleware });

  return hashedValue;
};
