import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  opacity: ${props => (props.clicked ? 1 : 1)};
  background: #f5f5f5;
`;
