import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 40px auto 0;
  border-collapse: collapse;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #ab5e2a;
  color: #333;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Td = styled.td`
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  &:last-child {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Img = styled.img`
  vertical-align: middle;
`;

export const Tr = styled.tr``;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const P = styled.p``;

export const Action = styled.div`
  display: flex;
`;

export const Warning = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 30px;
  display: inline-block;
`;
