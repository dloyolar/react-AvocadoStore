import 'semantic-ui-css/semantic.min.css';
import CartProvider from 'store/Cart';

function MyApp({ Component, pageProps }) {
  // Providers - COntext - Theme - data
  // Layout
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
