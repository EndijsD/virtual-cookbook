import { createContext, useReducer, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return { ...state, fetch: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    fetch: {},
  });

  const { data, isPending, error } = useFetch(
    'http://192.168.1.8:3001/recipes'
  );

  useEffect(() => {
    dispatch({ type: 'CHANGE_DATA', payload: { data, isPending, error } });
  }, [data, error, isPending]);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
