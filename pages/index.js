import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import useGetAvocados from '@hooks/useGetAvocados';
import Layout from '@components/Layout/Layout';

const Home = () => {
  const { products } = useGetAvocados();

  return (
    <Layout>
      <KawaiiHeader />
    </Layout>
  );
};

export default Home;
