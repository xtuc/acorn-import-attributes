import * as acorn from 'acorn';
import { importAttributes } from '../src/index';

const Parser = acorn.Parser.extend(importAttributes);

export default function testPlugin(code) {
  let result;
  try {
    result = Parser.parse(code, {
      ecmaVersion: 12,
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

