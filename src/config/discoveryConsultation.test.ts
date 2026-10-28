import { describe, expect, test } from 'bun:test';
import { discoveryConsultation } from './discoveryConsultation';

describe('initial discovery consultation', () => {
  test('is free', () => expect(discoveryConsultation.priceCAD).toBe(0));
  test('lasts 30 minutes', () => expect(discoveryConsultation.durationMinutes).toBe(30));
  test('carries no obligation', () => expect(discoveryConsultation.obligation).toBe(false));
});