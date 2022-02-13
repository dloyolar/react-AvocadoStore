import useGetAvocados from '../hooks/useGetAvocados';

const Home = () => {
  const { products } = useGetAvocados();

  return (
    <div>
      <p>Home</p>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
