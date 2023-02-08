import { useData } from '../../hooks/useData';
import RecipeList from '../RecipeList/RecipeList';
import * as S from './style';

const Home = () => {
  const { fetch } = useData();
  const { data, isPending, error } = fetch;

  return (
    <>
      {isPending && <S.Message>Loading...</S.Message>}
      {error && <S.Message>{error}</S.Message>}
      {data && <RecipeList />}
    </>
  );
};

export default Home;
