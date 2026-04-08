#!/usr/bin/env node
import { generateVibeStarter } from './index.js';

const idea = process.argv.slice(2).join(' ').trim();

if (!idea) {
  console.error('Usage: npm start -- "Describe your app in one sentence"');
  process.exit(1);
}

try {
  const result = generateVibeStarter(idea);
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error';
  console.error(`Error: ${message}`);
  process.exit(1);
}
