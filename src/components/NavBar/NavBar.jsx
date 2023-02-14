import { useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import * as S from './style';

const NavBar = () => {
  const [searchText, setSearchText] = useState('');
  const { updateSearchInput } = useData();

  useEffect(() => {
    updateSearchInput(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <S.Header>
      <S.Nav>
        <S.Title to="/">Cook Book</S.Title>
        <S.Div>
          <S.Label htmlFor="search">Search:</S.Label>
          <S.Search
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <S.Create to="/create">create recipe</S.Create>
        </S.Div>
      </S.Nav>
    </S.Header>
  );
};

export default NavBar;
