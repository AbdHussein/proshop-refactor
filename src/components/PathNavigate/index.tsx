import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PathLink, PathName, PathWrapper } from './styles';

const PathNavigate = ({ name, ...props }) => {
  const navigate = useNavigate();
  return (
    <PathWrapper {...props}>
      <PathLink onClick={() => navigate(-1)}>Back /</PathLink>
      <PathName> {name}</PathName>
    </PathWrapper>
  );
};

export default PathNavigate;
