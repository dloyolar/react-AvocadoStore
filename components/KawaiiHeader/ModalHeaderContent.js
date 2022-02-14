import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import { PosMeMuero } from '@components/SVGIcons';

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5">
            <PosMeMuero size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">You killed the avocado 🥑</Header>
            <p>You touched him so much that you killed him. 💀</p>
            <p>
              On the other hand, you are a very curious person and you have
              discovered this. 🤔
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default ModalHeaderContent;
