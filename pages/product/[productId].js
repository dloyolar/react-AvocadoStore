import { useRouter } from 'next/router';

import useGetAvocadosById from '@hooks/useGetAvocadosById';
import ProductSummary from '@components/ProductSummary/ProductSummary';

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();

  const { product } = useGetAvocadosById(productId);

  return product === null ? null : <ProductSummary product={product} />;
};

export default ProductItem;
