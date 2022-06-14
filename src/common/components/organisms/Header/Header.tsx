/** @jsxImportSource @emotion/react */

import Logo from '@common/components/atoms/Logo/Logo';
import { CSSObject } from '@emotion/react';
import { Link, NavLink } from 'react-router-dom';

type HeaderTypes = {
  css?: CSSObject;
};

const headerStyle: CSSObject = {
  width: '100vw',
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  '& > ul': {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
};

const links = ['summary', 'map'];

export default ({ css }: HeaderTypes) => {
  return (
    <div css={{ ...headerStyle, ...css }}>
      <Logo />
      <ul>
        {links.map((link) => (
          <li key={link} css={{ padding: '0 1rem' }}>
            <NavLink
              css={{
                textDecoration: 'none',
                color: 'black',
                ':hover': { textDecoration: 'underline' },
              }}
              to={`/${link}`}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
