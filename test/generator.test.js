import test from 'node:test';
import assert from 'node:assert/strict';

import { generateVibeStarter } from '../src/index.js';

test('generates complete starter payload from one-line app idea', () => {
  const idea = 'Une app de suivi d’habitudes avec rappels et statistiques hebdo';
  const result = generateVibeStarter(idea);

  assert.equal(result.idea, idea);
  assert.equal(typeof result.perfectPrompt, 'string');
  assert.ok(result.perfectPrompt.includes('You are a senior product engineer'));

  assert.equal(Array.isArray(result.recommendedStack), true);
  assert.ok(result.recommendedStack.length >= 5);

  assert.equal(Array.isArray(result.orderedSteps), true);
  assert.ok(result.orderedSteps.length >= 6);
  assert.equal(result.orderedSteps[0].toLowerCase().includes('define'), true);

  assert.deepEqual(result.monetization, {
    freePlan: 'Free tier with ads',
    proPlan: '€7/month Pro (no ads + advanced exports + priority generation)'
  });
});

test('throws on empty idea', () => {
  assert.throws(() => generateVibeStarter('   '), /non-empty string/i);
});
