import { DataContext } from '../../contexts/DataContext';
import useFetch from '../../hooks/useFetch';
import RecipeList from '../RecipeList/RecipeList';
import * as S from './style';

const Home = () => {
  const fetch = useFetch('http://192.168.1.8:3001/recipes');

  return (
    <DataContext.Provider value={fetch}>
      {fetch.isPending && <S.Message>Loading...</S.Message>}
      {fetch.error && <S.Message>{fetch.error}</S.Message>}
      {fetch.data && <RecipeList />}
    </DataContext.Provider>
  );
};

export default Home;
