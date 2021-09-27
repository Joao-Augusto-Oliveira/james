import styled from "styled-components";

export const Button = styled.div`
  border-radius: 3rem;
  background-color: var(--green);
  border: none;
  max-width: 250px;
  font-weight: 800;
  height: 2.75rem;
  padding: 1rem 2rem;
  transition: 250ms filter;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 870px) {
    width: 100%;
    height: 2rem;
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
  }
`;
