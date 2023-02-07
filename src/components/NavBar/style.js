import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background: #58249c;
`;

export const Nav = styled.nav`
  margin: 0 12rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link)`
  font-size: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Label = styled.label`
  color: white;
  font-size: 23px;
`;

export const Search = styled.input`
  background: white;
  width: 220px;
  height: 40px;
  border-radius: 5px;
  margin-left: 0.5rem;
  font-size: 25px;

  &:hover {
    background: #ccc;
  }
  &:focus {
    background: #ccc;
  }
`;

export const Create = styled(Link)`
  background: transparent;
  border: 1px solid white;
  font-size: 25px;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  margin-left: 2rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #ccc;
    color: #ccc;
  }
  &:active {
    border: 1px solid #999;
    color: #999;
  }
`;
