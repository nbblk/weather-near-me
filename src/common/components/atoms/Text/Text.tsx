import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type TextTypes = {
  value: string | number;
  children?: ReactNode;
  css?: CSSObject;
};

const textStyle: CSSObject = {};

export default ({ value, children, css }: TextTypes) => (
  <span css={{ ...textStyle, ...css }}>{children ? children : value}</span>
);
