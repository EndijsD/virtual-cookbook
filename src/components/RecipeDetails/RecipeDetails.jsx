import { useParams } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import * as S from './style';

const RecipeDetails = () => {
  const { id } = useParams();
  const { data } = useData();
  const recipe = data.recipes.find((recipe) => recipe.id === Number(id));

  return (
    <S.Article>
      <S.H1>{recipe.title}</S.H1>
      <S.Time>Takes {recipe.time} minutes to cook.</S.Time>
      <S.Ingredients>{recipe.ingredients.join(', ')}.</S.Ingredients>
      <S.Method>{recipe.method}</S.Method>
    </S.Article>
  );
};

export default RecipeDetails;