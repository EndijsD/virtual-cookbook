// FOR CONTEXT
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const useData = () => {
  const context = useContext(DataContext);

  if (!context) throw Error('useData() must be used inside DataProvider');

  return context;
};

// FOR REDUX-TOOLKIT
// import { useSelector, useDispatch } from 'react-redux';
// import { UPDATE_DATA, UPDATE_SEARCH_INPUT } from '../redux/DataRedux';

// const useData = () => {
//   const redux = useSelector((state) => state.DataRedux);
//   const dispatch = useDispatch();

//   if (!redux) throw Error('useData() must be used inside Provider');

//   // FUNCTIONS
//   const fetchDataInApp = (data) => {
//     dispatch(UPDATE_DATA(data));
//   };

//   const updateSearchInput = (data) => {
//     dispatch(UPDATE_SEARCH_INPUT(data));
//   };

//   return { ...redux, fetchDataInApp, updateSearchInput };
// };

// FOR BOTH EXPORT
export default useData;
