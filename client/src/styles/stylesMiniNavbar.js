import styled from 'styled-components';

export const MiniNavbarContainer = styled.nav`
  display: flex;
  background-color: #ab5e2a;
  align-items: center;
  height: 40px;
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