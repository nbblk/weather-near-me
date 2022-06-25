/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import { NavLink } from 'react-router-dom';

type Links = {
  links: string[];
  css: CSSObject;
};

export default ({ links, css }: Links) => (
  <ul>
    {links.map((link) => (
      <li key={link} css={{ padding: '0 1rem' }}>
        <NavLink css={{ ...css }} to={`/${link}`}>
          {link}
        </NavLink>
      </li>
    ))}
  </ul>
);
