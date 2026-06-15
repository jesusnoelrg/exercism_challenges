export function twoFer(name?: string): string {

  return `One for ${name === undefined ? "you" : name }, one for me.`;
};
