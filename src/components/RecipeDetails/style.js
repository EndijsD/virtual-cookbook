import styled from 'styled-components';

export const Article = styled.article`
  margin: 3rem 12rem;
  background: white;
  text-align: center;
  padding: 2rem;

  @media (max-width: 1410px) {
    margin: 3rem 8rem;
  }

  @media (max-width: 1100px) {
    margin: 3rem 2rem;
  }
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin: 2rem auto;
`;

export const Time = styled.p`
  font-size: 18px;
`;

export const Ingredients = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 1rem;
`;

export const Method = styled.p`
  font-size: 18px;
  text-align: left;
`;
