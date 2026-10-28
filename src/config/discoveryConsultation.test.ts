import { describe, test } from 'node:test';
import { strict as assert } from 'node:assert';
import { discoveryConsultation } from './discoveryConsultation';

describe('initial discovery consultation', () => {
  test('is free', () => assert.equal(discoveryConsultation.priceCAD, 0));
  test('lasts 30 minutes', () => assert.equal(discoveryConsultation.durationMinutes, 30));
  test('carries no obligation', () => assert.equal(discoveryConsultation.obligation, false));
});