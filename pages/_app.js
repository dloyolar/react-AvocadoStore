import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  // Providers - COntext - Theme - data
  // Layout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
