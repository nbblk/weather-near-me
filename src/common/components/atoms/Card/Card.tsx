/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type CardTypes = {
  children: ReactNode;
  css?: CSSObject;
};

const cardStyle: CSSObject = {
  width: '80%',
  padding: '2rem',
  margin: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  background: '#ffffff',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
};

export default ({ children, css }: CardTypes) => (
  <div css={{ ...cardStyle, ...css }}>{children}</div>
);
