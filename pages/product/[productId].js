import { useRouter } from 'next/router';

import useGetAvocadosById from '@hooks/useGetAvocadosById';

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();

  const { product } = useGetAvocadosById(productId);

  return <h1>ProductItem {product?.name}</h1>;
};

export default ProductItem;
