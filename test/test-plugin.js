import * as acorn from 'acorn';
import importAssertions from '../src/index';

const Parser = acorn.Parser.extend(importAssertions);

export default function testPlugin(code) {
  let result;
  try {
    result = Parser.parse(code, {
      ecmaVersion: 7,
      locations: true,
      ranges: true,
      sourceType: 'module',
    });
  } catch (e) {
    result = {
      error: e.message,
    };
  }

  return result;
}

