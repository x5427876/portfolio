import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there!  <br />
        I'm Gavin Kung
      </SectionTitle>
      <SectionText>
        {`Class Person {`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`Occupation: Software Engineer,`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`Age: '25',`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`Gender: 'Male',`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`Interests: 'Music, Travel',`}
        <br />&nbsp;&nbsp;&nbsp;&nbsp;{`Greeting: 'Welcome to my website!'`}<br />{`}`}
      </SectionText>
      <Button onClick={() => { window.location = 'https://github.com/x5427876' }}>Learn More</Button>
    </LeftSection>
  </Section >
)


export default Hero;