import { useEffect, useState } from 'react';

const useGetAvocadosById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => setError(err));
    }
    setLoading(false);
  }, [id]);

  return { product, loading, error };
};

export default useGetAvocadosById;
