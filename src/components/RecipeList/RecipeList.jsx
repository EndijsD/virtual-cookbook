import * as S from './style';

const RecipeList = ({ recipes }) => {
  return (
    <S.Content>
      {recipes.map((recipe) => (
        <S.Item>
          <div>
            <S.H1>{recipe.title}</S.H1>
            <S.H2>{recipe.time} minutes to make.</S.H2>
          </div>
          <S.P>{recipe.method}</S.P>
          <S.StyledLink to={`/recipes/${recipe.id}`}>Cook this</S.StyledLink>
        </S.Item>
      ))}
    </S.Content>
  );
};

export default RecipeList;
