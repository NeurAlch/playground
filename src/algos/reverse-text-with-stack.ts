import { Stack } from '../data-structures/stack';

export const reverseTextWithStack = (text: string): string => {
  const stack = new Stack<string>(text.length);

  for (const letter of text) {
    stack.insert(letter);
  }

  const reversedText = [];
  while (!stack.isEmpty()) {
    reversedText.push(stack.delete());
  }

  return reversedText.join('');
};
