import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import useGetAvocados from '@hooks/useGetAvocados';

const Home = () => {
  const { products } = useGetAvocados();

  return (
    <div>
      <KawaiiHeader />
    </div>
  );
};

export default Home;
