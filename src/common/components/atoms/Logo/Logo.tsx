import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type LogoTypes = {
  children: ReactNode;
  css?: CSSObject;
};

const logoStyle: CSSObject = {
  padding: 0,
};

export default ({ children, css }: LogoTypes) => (
  <span css={{ ...logoStyle, ...css }}>{children}</span>
);
