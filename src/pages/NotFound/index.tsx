import React from 'react';
import { Link as Link_ } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Help } from '../../assets/helpOutline.svg';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const MainBox = styled.div`
  background-color: #95c2de;
  margin: auto;
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Error = styled.div`
  color: #ffffff;
  font-size: 11rem;
`;

const Error2 = styled.div`
  color: #ffffff;
  font-size: 11rem;
`;

const Icon = styled(Help)`
  width: 10rem;
  height: 10rem;
  color: #ffffff;
  animation: ${rotate} 2s linear infinite;
`;

const Message = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  & > div {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const Link = styled(Link_)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <MainBox>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Error>4</Error>
        <Icon />
        <Error2>4</Error2>
      </div>
      <Message>
        Maybe this page moved? Got deleted?
        <br /> Is hiding out in quarantine? Never <br />
        existed in the first place?
        <div>
          Let&apos;s go <Link to="/">home</Link> and try from there.
        </div>
      </Message>
    </MainBox>
  );
};

export default NotFound;
