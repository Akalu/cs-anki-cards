export const QUESTIONS: any =

  [{
    id: 1,
    formulation: 'Boolean operations, short circuits in Boolean operations',
    answer: 'The && and || operators ""short-circuit"", meaning they don\'t evaluate the right-hand side if it isn\'t necessary.\n' +
      '\n' +
      'The & and | operators, when used as logical operators, always evaluate both sides.\n' +
      '\n' +
      'There is only one case of short-circuiting for each operator, and they are:\n' +
      '\n' +
      'false && ... - it is not necessary to know what the right-hand side is because the result can only be false regardless of the value there\n' +
      'true || ... - it is not necessary to know what the right-hand side is because the result can only be true regardless of the value there',
    category: 2
  },
  {
    id: 2,
    formulation: 'Complexity of algorithms, big O notation (can be discussed during coding task)',
    answer: 'Check web sources',
    category: 2
  }
];
