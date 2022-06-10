import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type LogoTypes = {
  css?: CSSObject;
};

const logoStyle: CSSObject = {
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default ({ css }: LogoTypes) => (
  <div css={{ ...logoStyle, ...css }}>
    <span css={{ padding: '0.1rem' }}>weather-near-me</span>
  </div>
);
