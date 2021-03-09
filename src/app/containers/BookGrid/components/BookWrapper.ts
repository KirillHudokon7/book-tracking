import styled from 'styled-components';

export const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  justify-content: center;
  column-gap: 30px;
  row-gap: 30px;

  @media (max-width: 768px) {
    column-gap: 12px;
    row-gap: 24px;
    grid-template-columns: repeat(auto-fill, 190px);
  }
`;
