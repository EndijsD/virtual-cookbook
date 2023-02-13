import { useData } from '../../hooks/useData';
import * as S from './style';

const RecipeList = () => {
  const { data, searchInput } = useData();

  return (
    <S.Content>
      {searchInput && <S.Title>Recipes including {searchInput}</S.Title>}
      <S.Grid>
        {data.recipes
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((recipe) => (
            <S.Item key={recipe.id}>
              <div>
                <S.H1>{recipe.title}</S.H1>
                <S.H2>{recipe.time} minutes to make.</S.H2>
              </div>
              <S.P>{recipe.method}</S.P>
              <S.StyledLink to={`/recipes/${recipe.id}`}>
                Cook this
              </S.StyledLink>
            </S.Item>
          ))}
      </S.Grid>
    </S.Content>
  );
};

export default RecipeList;
