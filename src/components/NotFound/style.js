import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  margin: 3rem;
  line-height: 40px;
`;

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  background: #58249c;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
  &:active {
    color: #999;
  }
`;
