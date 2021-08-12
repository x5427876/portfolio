import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='technologies'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a  range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle style={{ display: 'flex' }}><DiReact size='3rem' />Front-End</ListTitle>
          <ListParagraph style={{ paddingLeft: '30px' }}>
            Experience with <br />
            React.js <br />
            Redux.js <br />
            TailwindCSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle style={{ display: 'flex' }}><DiFirebase size='3rem' />Back-End</ListTitle>
          <ListParagraph style={{ paddingLeft: '30px' }}>
            Experience with <br />
            Node.js <br />
            Express<br />
            MongoDB<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
