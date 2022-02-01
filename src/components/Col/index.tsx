import styled from 'styled-components';

export const Column = styled.div`
  padding-right: 60px;

  align-items: center;
  @media (max-width: 768px) {
    padding-right: 0;
    flex-direction: column-reverse;
    & * {
      text-align: center !important;
      margin: 40px auto;
    }
    & button {
      display: block;
    }
  }
`;
