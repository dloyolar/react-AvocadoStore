import Layout from '@components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';
import CartProvider from 'store/Cart';

function MyApp({ Component, pageProps }) {
  // Providers - COntext - Theme - data
  // Layout
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
