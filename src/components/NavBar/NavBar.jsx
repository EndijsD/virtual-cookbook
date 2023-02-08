import * as S from './style';

const NavBar = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Title to="/">Cook Book</S.Title>
        <S.Div>
          <S.Label htmlFor="search">Search:</S.Label>
          <S.Search type="search" />

          <S.Create to="/create">create recipe</S.Create>
        </S.Div>
      </S.Nav>
    </S.Header>
  );
};

export default NavBar;
