import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from '../styles/stylesNavbar.js';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleGroupsClick = () => {
    navigate('/groups');
  };

  const handleStudentsClick = () => {
    navigate('/students');
  };

  return (
    <styled.NavbarContainer>
      <styled.Button onClick={handleHomeClick}>Home</styled.Button>
      <styled.Button onClick={handleGroupsClick}>Groups</styled.Button>
      <styled.Button onClick={handleStudentsClick}>Students</styled.Button>
    </styled.NavbarContainer>
  );
};

export default Navbar;
