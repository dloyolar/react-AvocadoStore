import Layout from '@components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';

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
