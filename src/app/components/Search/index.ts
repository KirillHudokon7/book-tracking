import styled from 'styled-components';
import SearchInput from 'react-search-input';

interface SearchProps {
  readonly mode: string;
}

export const Search = styled(SearchInput)<SearchProps>`
  margin: 0 18px 24px;
  
  > input {
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    border: 1.5px solid ${(props) => props.mode === 'dark' ? '#1E1E1E' : '#E1E1E1'};
    font-size: 15px;
    background-color: ${(props) => props.mode === 'dark' ? '#1E1E1E' : '#fff'};
    color: ${(props) => props.mode === 'dark' ? '#fff' : '#000'};
    
    &:focus {
      outline: none;
    }
}
`;
