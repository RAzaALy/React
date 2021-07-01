import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Thanks For <br />
        Landing at my portfolio.
      </SectionTitle>
      <SectionText>
        I'm a creative and collaborator. Leveraging my experience as a Front-end
        Web Developer and focus on elegant design and user experiences. I'm
        specialized in JS and React
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
