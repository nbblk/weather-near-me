import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type TextTypes = {
  children: ReactNode;
  css: CSSObject;
};

const textStyle: CSSObject = {};

export default ({ children, css }: TextTypes) => (
  <span css={{ ...textStyle, ...css }}>{children}</span>
);
