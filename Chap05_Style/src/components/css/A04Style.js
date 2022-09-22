import styled from 'styled-components';

export const MYBOX = styled.div`
  background: ${props => props.color || 'lightgray'};
  color: orange;
  padding: 10px;
  font-size: 24pt;
`;
export const MYBTN = styled.button`
  background: ${props => props.color || 'lightgray'};
  border: 1px solid gray;
  padding: 5px;

  &:hover {
    background: black;
    color: white;
  }
`
