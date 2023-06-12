export const mascaras: { [key: string]: IMask  } = {
  CNH: {
    mask: '00000000000',
    guide: false,
    showMask: true,
  },
  CI: {
    mask: '0000000',
    guide: false,
    showMask: true,
  },
  RNE: {
    mask: '00.000.000-A',
    guide: false,
    showMask: true,
  },
  RE: {
    mask: '0000000000',
    guide: false,
    showMask: true,
  },
  RG: {
    mask: '00.000.000-0',
    guide: false,
    showMask: true,
  },
};

export interface IMask {
  mask: string | RegExp;
  guide: boolean;
  showMask: boolean;
}