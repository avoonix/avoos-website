import { mdiHome } from "@mdi/js";
import styled from "styled-components";
import IconLink from "../components/IconLink";
import NotFoundPageMeta from "../components/seo/NotFoundPageMeta";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 120px;
  padding-left: 120px;
  max-width: 1000px;
  @media (max-width: 600px) {
    justify-content: initial;
    padding-right: 0;
    padding-left: 0;
  }
`;

const Content = styled.main`
  padding: 8px;
  width: 50%;
  height: 100%;
  @media (max-width: 600px) {
    width: 100%;
    max-width: unset;
  }
`;

export default function Custom404() {
  return (
    <>
      <NotFoundPageMeta />
      <Container>
        <Content>
          <h1>404</h1>
          <p>Page not found</p>
          <IconLink href="/" iconPath={mdiHome} text="Home" />
        </Content>
      </Container>
    </>
  );
}
