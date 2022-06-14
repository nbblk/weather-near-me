/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type CardTypes = {
  children: ReactNode;
  css: CSSObject;
};

const iconStyle: CSSObject = {
  padding: 0,
};

export default ({ children, css }: CardTypes) => (
  <span css={{ ...iconStyle, ...css }}>{children}</span>
);
