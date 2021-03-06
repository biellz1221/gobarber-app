import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  border: none;
  width: 100%;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  transition: .3s;
  &:hover {
    background: ${shade(0.2, '#ff9000')}
  }
`;
