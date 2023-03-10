import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  margin: 3rem 12rem;

  @media (max-width: 1410px) {
    margin: 3rem 8rem;
  }

  @media (max-width: 1100px) {
    margin: 3rem 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  gap: 2rem;
  justify-content: center;
`;

export const Item = styled.div`
  border-radius: 5px;
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #ccc;
  justify-content: space-between;

  &:hover {
    transform: rotate(5deg);
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 2rem;
  text-align: center;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 0.3rem;
`;

export const H2 = styled.h2`
  font-size: 18px;
  color: #888;
`;

export const P = styled.p`
  color: #555;
  margin: 1rem 0;
  font-size: 15px;
`;

export const StyledLink = styled(Link)`
  background: #dfdfdf;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
  color: #555;

  &:hover {
    background: #ccc;
  }
  &:active {
    background: #999;
  }
`;
