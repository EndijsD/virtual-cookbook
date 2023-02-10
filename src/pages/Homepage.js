import { useEffect } from 'react';
import Home from '../components/Home/Home';
import { useData } from '../hooks/useData';
import useFetch from '../hooks/useFetch';
import { url } from '../url';

const Homepage = () => {
  const { fetchDataInApp } = useData();
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch('http://' + url + '/recipes');

  useEffect(() => {
    fetchDataInApp({ recipes, isPending, error });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes, isPending, error]);

  return <Home />;
};

export default Homepage;
