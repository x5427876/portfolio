import Link from 'next/link';
import React from 'react';
import { AiFillProject, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <AiFillProject size='3rem' /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href='#about' >
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href='#technologies' >
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href='#projects' >
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/x5427876'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/tse-kung-2794a4204/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/kongtse.0613/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
