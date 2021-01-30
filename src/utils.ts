'use strict';

import * as winston from 'winston';

export function trimJson(value: unknown): any {
  if (value === null || value === undefined) {
    return value;
  } else if (typeof value === 'string') {
    return value.trim();
  } else if (value instanceof Array) {
    return value.map(trimJson);
  } else if (value instanceof Object) {
    const obj: { [key: string]: any } = {};
    for (const name in value) {
      obj[name] = trimJson((value as any)[name]);
    }
    return obj;
  } else {
    return value;
  }
}

export function isEmpty(type: string | number): boolean {
  if (typeof type === 'string') {
    return !!type.length;
  } else {
    return true;
  }
}

export const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.cli(),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}${info.message}`)
  ),
  transports: new winston.transports.Console(),
});
