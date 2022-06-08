import { CSSObject } from '@emotion/react';

type ButtonTypes = {
  value: string;
  css: CSSObject;
};

const buttonStyle: CSSObject = {
  padding: '1rem',
  borderRadius: '1rem',
};

export default ({ value, css }: ButtonTypes) => (
  <button css={{ ...buttonStyle, ...css }}>{value}</button>
);
