import Logo from "@/common/components/atoms/Logo/Logo";
import { CSSObject } from "@emotion/react";
import { Link, NavLink } from "react-router-dom";

type HeaderTypes = {
    css?: CSSObject
}

const headerStyle: CSSObject = {
    width: '100vw',
    padding: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
};

const links = ["summary", "map"];

export default ({ css }: HeaderTypes) => {
    return <div css={{ ...headerStyle, ...css }}><ul>{links.map(link => <li><NavLink style={{ listStyle: 'none' }} to={`/${link}`}>{link}</NavLink></li>)}</ul></div>
};