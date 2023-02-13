import { useData } from '../../hooks/useData';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import RecipeList from '../RecipeList/RecipeList';
import * as S from './style';

const Home = ({ page }) => {
  const { data } = useData();
  const { recipes, isPending, error } = data;

  return (
    <>
      {isPending && <S.Message>Loading...</S.Message>}
      {error && <S.Message>{error}</S.Message>}
      {recipes && page === 'home' && <RecipeList />}
      {recipes && page === 'details' && <RecipeDetails />}
    </>
  );
};

export default Home;
