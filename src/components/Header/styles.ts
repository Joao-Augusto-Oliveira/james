import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 5.19rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--text-button);
    font-weight: 800;
    font-family: "Poppins";
  }

  @media (max-width: 870px) {
    margin-right: 2rem;
    img {
      width: 60%;
      height: 60%;
    }
  }
`;
