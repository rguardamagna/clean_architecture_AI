import { getHealth } from '../../src/shared/health';
import { describe, it, expect } from 'vitest';

describe('Health Check', () => {
  it('should return status OK', () => {
    expect(getHealth()).toEqual({ status: 'OK' });
  });
});