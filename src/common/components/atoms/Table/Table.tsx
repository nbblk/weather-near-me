import { css, CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type TableTypes = {
  children?: ReactNode;
  css?: CSSObject;
};

const tableStyles: CSSObject = {
  width: '100%',
  '& > th, td': {
    padding: '0.5rem',
    textAlign: 'center',
  },
};

export default ({ children, css }: TableTypes) => (
  <table css={{ ...tableStyles, ...css }}>{children}</table>
);
