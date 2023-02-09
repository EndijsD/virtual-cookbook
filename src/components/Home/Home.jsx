import { useData } from '../../hooks/useData';
import RecipeList from '../RecipeList/RecipeList';
import * as S from './style';

const Home = () => {
  const { data } = useData();
  const { recipes, isPending, error } = data;

  return (
    <>
      {isPending && <S.Message>Loading...</S.Message>}
      {error && <S.Message>{error}</S.Message>}
      {recipes && <RecipeList />}
    </>
  );
};

export default Home;
