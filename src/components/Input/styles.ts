import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }
`;
