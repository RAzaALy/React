// import Link from "next/link";
import React from "react";
import { DiCssdeck } from "react-icons/di";
import menuItems from "./header.data";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
} from "./HeaderStyles";

const Header = ({className}) => (
  <header sx={styles.header} className={className}>
    <Container sx={styles.container}>
      <Div1>
        <Link href="home">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>RAza ALy</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        {menuItems.map((item, index) => (
          <li>
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              offset={-50}
              duration={300}
              smooth={true}
              key={index}
            >
              <NavLink>{item.label}</NavLink>
            </Link>
          </li>
        ))}

      </Div2>
      <Div3>
        {/* <SocialIcons href="https://github.com" target="blank">
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com" target="blank">
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com" target="blank">
          <AiFillInstagram size="2.5rem" />
        </SocialIcons> */}
      </Div3>
    </Container>
  </header>
);

export default Header;
const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    Button: {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      "@media screen and (max-width: 768px)": {
        display: "none",
      },
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 200ms ease-in-out",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
