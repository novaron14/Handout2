export function greet(names: string[]): string {
  if (names.length === 0) {
    return 'Hello, my friend';
  }

  if (names.length === 1) {
    return `Hello ${names[0]}.`;
  }

  const lastPerson = names.pop();
  const allNames = names.join(', ');

  return `Hello ${allNames} and ${lastPerson}.`;
}