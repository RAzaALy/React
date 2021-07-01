import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section padding id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      <List>
        <ListItem>
          <DiReact size="5rem" />
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Experienced with <br /> React Js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="5rem" />
          <ListContainer>
            <ListTitle>Backend-end</ListTitle>
            <ListParagraph>
              Experienced with <br /> PHP and MySql
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="5rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experienced with <br /> Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SectionText>
  </Section>
);

export default Technologies;
