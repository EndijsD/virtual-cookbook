import { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  title: '',
  ingredients: [],
  method: '',
  time: '',
};

const Create = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [ing, setIng] = useState('');
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    fetch('http://192.168.1.8:3001/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    }).then(() => {
      setIsPending(false);
      navigate('/');
    });
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddIngredient = () => {
    if (ing) {
      const prevIng = formValues.ingredients;

      setFormValues({
        ...formValues,
        ingredients: prevIng.concat(ing),
      });

      setIng('');
    }
  };

  return (
    <S.Content>
      <S.Center>
        <S.H1>Add a new recipe</S.H1>
      </S.Center>

      <form onSubmit={handleFormSubmit}>
        <S.MarginBottom>
          <S.Label htmlFor="title">Recipe title:</S.Label>
          <S.Input
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleFormInputChange}
            required
          />
        </S.MarginBottom>

        <S.MarginBottom>
          <S.Label htmlFor="ingredients">Recipe ingredients:</S.Label>
          <S.Div>
            <S.Input
              id="ingredients"
              name="ingredients"
              value={ing}
              onChange={(e) => setIng(e.target.value)}
            />

            <S.AddButton
              type="button"
              value="add"
              onClick={handleAddIngredient}
            />
          </S.Div>

          <S.P>Current ingredients:</S.P>
          <S.Ul>
            {formValues.ingredients &&
              formValues.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
          </S.Ul>
        </S.MarginBottom>

        <S.MarginBottom>
          <S.Label htmlFor="method">Recipe method:</S.Label>
          <S.Textarea
            id="method"
            name="method"
            value={formValues.method}
            onChange={handleFormInputChange}
            required
          ></S.Textarea>
        </S.MarginBottom>

        <S.Label htmlFor="time">Cooking time (in minutes):</S.Label>
        <S.Input
          type="number"
          id="time"
          name="time"
          value={formValues.time}
          onChange={handleFormInputChange}
          required
        />

        <S.Center>
          {!isPending && <S.SubmitButton type="submit" value="submit" />}
          {isPending && (
            <S.SubmitButton type="submit" value="submitting..." disabled />
          )}
        </S.Center>
      </form>
    </S.Content>
  );
};

export default Create;
