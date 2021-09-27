import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-tite);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:nth-child(1) {
        color: var(--text-title);
      }

      &:nth-child(2) {
        color: var(--text-title);
      }
    }
  }

  @media (max-width: 870px) {
    table {
      display: block;
      width: 100%;
      overflow: auto;
      th {
        padding: 0.7rem;
      }
      td {
        padding: 1.7rem;
      }
    }
  }
`;

export const ButtonTrash = styled.a`
  color: var(--red);
  cursor: pointer;
`;

export const ButtonEdit = styled.a`
  color: var(--green);
  cursor: pointer;
`;
