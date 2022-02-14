import React from 'react';
import { Header, Transition } from 'semantic-ui-react';

import { Avocado } from '@components/SVGIcons';

const AnimatedHeader = ({ visible, onClick, onComplete }) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Avo
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Avocado size="58px" />
    </Transition>
    cado
  </Header>
);

export default AnimatedHeader;
