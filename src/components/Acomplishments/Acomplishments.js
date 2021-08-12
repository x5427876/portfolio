import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section id='about'>
    <SectionDivider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      Hello! My name is Gavin Kung, I'm working as a Junior Software Engineer in an electronics company, and I have about 6 months of work experience. <br />
      <br />
      My major work is web development based on Javascript and React framework. I also did some other things like creating an application with C#, MySQL, and so on.
    </SectionText>
  </Section>
);

export default Acomplishments;
