import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #232129;
  width: 100%;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

  ${(props) => props.hasError && css`
    border-color: #c53030;
  `}

  ${(props) => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `}

  input {
    color: #F4EDEB;
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
    color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030 !important;
    color: #FFF !important;
    &:before {
      border-color: #c53030 transparent !important;
    }
  }
`;
