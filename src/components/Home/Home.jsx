import useFetch from '../../hooks/useFetch';
import RecipeList from '../RecipeList/RecipeList';

const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch('http://192.168.1.8:3001/recipes');

  return <>{recipes && <RecipeList recipes={recipes} />}</>;
};

export default Home;
