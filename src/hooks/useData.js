import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) throw Error('useData() must be used inside DataProvider');

  return context;
};
