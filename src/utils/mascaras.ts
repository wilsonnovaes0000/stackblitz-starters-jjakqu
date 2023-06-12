export const mascaras: { [key: string]: (string | RegExp)[] } = {
  CNH: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  RG: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/],
  RNE: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  CI: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  RE: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
};
