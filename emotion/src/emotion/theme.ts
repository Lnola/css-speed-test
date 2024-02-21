export const theme = {
  text: 'white',
  transparentBackground: '#d8d8d810',
  tag: '#362376',
  tagSubdued: '#180b3d',
} as const;

export type Theme = typeof theme;

export type BaseProps = {
  theme: Theme;
};
