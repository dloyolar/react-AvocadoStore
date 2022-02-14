import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import useGetAvocados from '@hooks/useGetAvocados';
import ProductList from '@components/ProductList/ProductList';

const Home = () => {
  const { products } = useGetAvocados();

  return (
    <>
      <KawaiiHeader />
      <ProductList products={products} />
    </>
  );
};

export default Home;
