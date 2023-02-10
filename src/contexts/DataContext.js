import { createContext, useReducer, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { url } from '../url';

export const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: {},
  });

  const {
    data: recipes,
    isPending,
    error,
  } = useFetch('http://' + url + '/recipes');

  useEffect(() => {
    dispatch({ type: 'UPDATE_DATA', payload: { recipes, isPending, error } });
    //fetchDataInApp({ recipes, isPending, error });
  }, [recipes, isPending, error]);

  const fetchDataInApp = (data) => {
    dispatch({ type: 'UPDATE_DATA', payload: data });
  };

  return (
    <DataContext.Provider value={{ ...state, fetchDataInApp }}>
      {children}
    </DataContext.Provider>
  );
};
