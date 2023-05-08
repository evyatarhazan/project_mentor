import styled from "styled-components";

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

export const Warning = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  border-bottom: 1px solid red;
  display: inline-block;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;


export const Input = styled.input``;