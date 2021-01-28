'use strict';

export function toInt(value: string): number | undefined {
  try { return parseInt(value);} catch (e) {return undefined;}
}

