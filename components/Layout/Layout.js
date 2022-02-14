import React from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from '@components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
