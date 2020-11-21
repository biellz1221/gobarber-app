import styled, { keyframes } from 'styled-components';

import signUpBackgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImage}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  } to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

export const AnimationContainer = styled.div`

  animation: ${appearFromRight} 1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    margin: 80px auto;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #F4EDEB;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: .3s;
      &:hover {
        opacity: .8;
      }
    }
  }
  > a {
      color: #FF9000;
      display: flex;
      align-items: center;
      margin-top: 24px;
      text-decoration: none;
      transition: .3s;
      &:hover {
        opacity: .8;
    }
    svg {
      margin-right: 16px;
    }
  }
`;
