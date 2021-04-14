import { Grid } from '@geist-ui/react';
import { Home } from '@geist-ui/react-icons';
import { useState } from 'react';

export function Sidebar() {
  const [state, setState] = useState(1);
  return (
    <Grid.Container direction="column">
      <Grid onClick={() => setState((p) => p + 1)}>
        <Home />
        {state}
        test
      </Grid>
    </Grid.Container>
  );
}
