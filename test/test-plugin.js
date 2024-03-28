import * as acorn from 'acorn';

export default function testPlugin(code, plugin) {
  let result;
  try {
    const Parser = acorn.Parser.extend(plugin);
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

