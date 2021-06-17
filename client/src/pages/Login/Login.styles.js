import styled from "styled-components";

import colors from "../../styles/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, ${colors.login_primary}, ${colors.login_secondary});
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 38rem;
  width: 36rem;
  padding: 2rem;
  border-radius: 0.4rem;
  background-color: ${colors.white};
`;

const Title = styled.h2`
  color: ${colors.normal};
  margin-bottom: 3rem;
`;

export { Container, Content, Title };
