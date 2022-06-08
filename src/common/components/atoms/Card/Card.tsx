import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type CardTypes = {
  children: ReactNode;
  css: CSSObject;
};

const cardStyle: CSSObject = {
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
};

export default ({ children, css }: CardTypes) => (
  <div css={{ ...cardStyle, ...css }}>{children}</div>
);
