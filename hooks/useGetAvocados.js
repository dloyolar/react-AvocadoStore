import { useEffect, useState } from 'react';

const useGetAvocados = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`/api/avo`)
      .then((res) => res.json())
      .then(({ data }) => setProducts(data))
      .catch((err) => setError(err));
    setLoading(false);
  }, []);

  return { products, loading, error };
};

export default useGetAvocados;
