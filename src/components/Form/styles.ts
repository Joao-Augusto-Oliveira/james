import styled from "styled-components";

export const Container = styled.form`
  max-width: 1120px;
  margin: 0 auto;

  p {
    font-size: 1rem;
    color: var(--red);
    width: auto;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1.25rem;
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    a {
      text-decoration: none;
      color: var(--text-button);
    }
  }

  @media (max-width: 870px) {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 1.5rem;
  }
`;
