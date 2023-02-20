import { useEffect } from 'react';
import Home from '../components/Home/Home';
import useData from '../hooks/useData';
import useFetch from '../hooks/useFetch';
import url from '../url';

const Homepage = ({ page }) => {
  const { fetchDataInApp } = useData();
  const { data: recipes, isPending, error } = useFetch(url);

  useEffect(() => {
    fetchDataInApp({ recipes, isPending, error });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes, isPending, error]);

  return <Home page={page} />;
};

export default Homepage;
