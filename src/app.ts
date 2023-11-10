export function greet(names: string[]): string {
  if (names.length === 0) {
    return 'Hello, my friend';
  }

  const isShouting = names.every((name) => name.toUpperCase() === name);

  if (isShouting) {
    const shoutedNames = names.map((name) => name.toUpperCase());
    const greeting = shoutedNames.length === 1 ? 'HELLO' : 'HELLO';
    const joinedNames = shoutedNames.join(' AND ');

    return `${greeting} ${joinedNames}!`;
  }

  if (names.length === 1) {
    return `Hello ${names[0]}!`;
  }

  const lastPerson = names.pop();

  const allNames = names.join(', ');

  return `Hello ${allNames} and ${lastPerson}!`;
}
