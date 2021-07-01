import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="mob: +92 3051054905">+92 3051054905</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="E-mail: 007razajutt@gmail.com">
            007razajutt@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating Elegant Designs for your website</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com" target="blank">
            <AiFillGithub size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com" target="blank">
            <AiFillLinkedin size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com" target="blank">
            <AiFillInstagram size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
