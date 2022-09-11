import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type LinkTypes = {
  href: string;
  children?: ReactNode;
  css?: CSSObject;
};

const linkStyle: CSSObject = {
  ':hover': {
    filter: 'brightness(0.4)',
  },
};

export default ({ href, children, css }: LinkTypes) => (
  <a href={href} css={{ ...linkStyle, ...css }}>
    {children}
  </a>
);
