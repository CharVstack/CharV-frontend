import { CssBaseline } from '@mui/material';

import { GlobalStyle, Theme } from '@styles';
import { Routing } from '@utils/Routing';

const App = () => (
  <Theme>
    <CssBaseline />
    <GlobalStyle />
    <Routing />
  </Theme>
);

export default App;
