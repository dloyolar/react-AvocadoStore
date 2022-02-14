import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import useGetAvocados from '@hooks/useGetAvocados';
import Layout from '@components/Layout/Layout';
import ProductList from '@components/ProductList/ProductList';

const Home = () => {
  const { products } = useGetAvocados();

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={products} />
    </Layout>
  );
};

export default Home;
