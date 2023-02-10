import { createContext, useReducer } from 'react';

export const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    case 'UPDATE_SEARCH_INPUT':
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: {},
    searchInput: '',
  });

  const fetchDataInApp = (data) => {
    dispatch({ type: 'UPDATE_DATA', payload: data });
  };

  const updateSearchInput = (data) => {
    dispatch({ type: 'UPDATE_SEARCH_INPUT', payload: data });
  };

  return (
    <DataContext.Provider
      value={{ ...state, fetchDataInApp, updateSearchInput }}
    >
      {children}
    </DataContext.Provider>
  );
};
