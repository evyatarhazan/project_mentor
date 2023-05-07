import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  color: #fff;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;
