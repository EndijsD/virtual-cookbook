import * as S from './style';

const NotFound = ({ item }) => {
  return (
    <S.Div>
      <S.H2>Sorry,</S.H2>
      <p>That {item} cannot be found</p>
      <S.StyledLink to="/">Homepage</S.StyledLink>
    </S.Div>
  );
};

export default NotFound;
